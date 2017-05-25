import { version } from './../../../package.json';


const routeController = (req, res) => {
	res.status(200).send(version);
};

const route = {
	path: '/version',
	method: 'GET',
	controller: routeController
};

export default route;