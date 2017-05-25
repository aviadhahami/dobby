import express from 'express';
import versionRoute from './version/version.route';
import dietaryRoute from './dietary/dietary.route';
import getRestaurantRoute from './restaurant/restaurant.route';


const routes = [
	versionRoute,
	dietaryRoute,
	getRestaurantRoute
];

const router = express.Router();

routes.forEach(route => router[route.method.toLowerCase()](route.path, route.controller));


export default router;
