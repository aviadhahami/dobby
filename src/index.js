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

	}catch(runtimeErr){
		res.status(500).json(runtimeErr);
		return;
	}
});

// Listen to everything
app.use('*', router);


app.server.listen(process.env.PORT || '3002');

console.log(`Started on port ${app.server.address().port}`);

export default app;
