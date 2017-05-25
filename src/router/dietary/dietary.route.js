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
	res.status(200).json(dietOptionsAsObject);
};

const route = {
	path: '/dietary',
	method: 'GET',
	controller
};

export default route;