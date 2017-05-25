import { version } from './../../../package.json';


const controller = (req, res) => {
	res.status(200).send(version);
};

const route = {
	path: '/version',
	method: 'GET',
	controller
};

export default route;