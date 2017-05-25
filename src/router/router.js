import express from 'express';
import versionRoute from './version/version.route';
import helloWorldRoute from './hello-world/hello-world.route';


const routes = [
	versionRoute,
	helloWorldRoute,
];
const router = express.Router();

routes.forEach(route => router[route.method.toLowerCase()](route.path, route.controller));


export default router;
