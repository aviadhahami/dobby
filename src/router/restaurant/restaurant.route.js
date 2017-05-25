import restaurantAlgorithm from "../../algorithm/restaurantAlgorithm";

const controller = (req, res) => {
	const { time, budget, atmosphere, special_type } = req.query;
	
	const results = restaurantAlgorithm(time, budget, atmosphere, special_type);
	res.status(200).json({ text: results.toString() });
};

const route = {
	path: '/restaurant',
	method: 'GET',
	controller
};

export default route;