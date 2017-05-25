import express from 'express';
import versionRoute from './version/version.route';


const routes = [
	versionRoute,
];
const router = express.Router();

routes.forEach(route => {
	console.log(route);
	router[route.method.toLowerCase()](route.path, route.controller);
});


export default router;
