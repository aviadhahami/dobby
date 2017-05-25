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
						"buttons": [
							{
								"type": "show_block",
								"block_name": "some block name",
								"title": "Show the block!"
							},
							{
								"type": "web_url",
								"url": "https://petersapparel.parseapp.com/buy_item?item_id=100",
								"title": "Buy Item"
							}
						]
					}
				}
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