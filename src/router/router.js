import express from 'express';
import versionRoute from './version/version.route';
import getRestaurantRoute from './dietary/dietary.route';


const routes = [
	versionRoute,
	getRestaurantRoute
];

const router = express.Router();

routes.forEach(route => router[route.method.toLowerCase()](route.path, route.controller));


export default router;
