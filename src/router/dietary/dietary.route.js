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
				"attachment": {
					"type": "template",
					"payload": {
						"template_type": "button",
						"text": "Hello!",
						"buttons": dietOptions.map(option => ({
							"type": "show_block",
							"block_name": "some block name",
							"title": option
						}))
						
					}
				}
			}
		]
	};
	res.status(200).json(response);
	
};

const route = {
	path: '/dietary',
	method: 'GET',
	controller
};

export default route;