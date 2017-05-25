const dietOptions = [
	'בשר',
	'צמחוני',
	'ללא גלוטן',
	'כשר',
	'דגים',
	'אסייתי',
];

const dietOptionsAsObject = {};

dietOptions.forEach((option, index) => dietOptionsAsObject[index] = option);

const controller = (req, res) => {
	// res.status(200).json({ 'text': dietOptionsAsObject });
	const response = {
		"messages": [
			{ "text": "Welcome to our store!" },
			{ "text": "How can I help you?" }
		]
	}
	res.status(200).json(response);
	
};

const route = {
	path: '/dietary',
	method: 'GET',
	controller
};

export default route;