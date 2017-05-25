import { version } from './../../../package.json';


const controller = (req, res) => {
	res.status(200).send('Hello World');
};

const route = {
	path: '/hello-world',
	method: 'GET',
	controller
};

export default route;