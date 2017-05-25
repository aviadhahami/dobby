import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './router/router';

let app = express();
app.server = http.createServer(app);

// 3rd party middleware
app.use(cors({
	exposedHeaders: ['Link']
}));

app.use(bodyParser.json({
	limit: '100kb'
}));

// Listen to everything
app.use(router);

app.server.listen(process.env.PORT || '3002');

console.log(`Started on port ${app.server.address().port}`);

export default app;
