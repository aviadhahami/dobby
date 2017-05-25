import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

let app = express();
app.server = http.createServer(app);

// 3rd party middleware
app.use(cors({
	exposedHeaders: ['Link']
}));

app.use(bodyParser.json({
	limit: '100kb'
}));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


const router = express.Router();
router.get('*', (req, res) =>{
	try{
		const { PRODUCT_TYPES } = enums;

		const subdomainName = extractSubdomainName(req.get('host'));
		if(!subdomainName){
			res.status(404).render('error',
				{ subdomainName, statusCode: 404, error: 'Not found' });
			return;
		}

		websites
			.findOne({ 'url': subdomainName, 'active': true })
			.select('accountId')
			.exec((err, website) =>{
				if(err || !website){
					const statusCode = err ? 500 : 404;
					res.status(statusCode).render('error',
						{ subdomainName, statusCode, error: err || 'Not found' });
					return;
				}

				const { _id, accountId } = website;
				fetchClientToken(_id, accountId).then(tokenResponse =>{

					const appConfig = tokenResponse;


					let viewToRender, productConfig;
					switch(appConfig.type){
						case (PRODUCT_TYPES.WEBSITE):
						default:{
							viewToRender = 'website';
							productConfig = {
								layout: false,
								config: JSON.stringify(appConfig || {})
							};
						}
					}

					res.render(viewToRender, productConfig);
					return;
				}, fetcherErr =>{
					const { statusCode, error } = fetcherErr;
					res.status(statusCode).render('error', { subdomainName, statusCode, error });
					return;
				});
			})

	}catch(runtimeErr){
		res.status(500).json(runtimeErr);
		return;
	}
});

// Listen to everything
app.use(subdomain('*', router));


app.server.listen(process.env.PORT || '3002');

console.log(`Started on port ${app.server.address().port}`);

export default app;
