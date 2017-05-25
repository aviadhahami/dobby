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
			{
				"text":  "testRedirectInQuickReply",
				"quick_replies": [
					{
						"title":"go",
						"block_names":["Block1", "Block2"]
					}
				]
			}
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