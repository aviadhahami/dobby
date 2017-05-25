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
						"template_type": "list",
						"top_element_style": "large",
						"elements": [
							{
								"title": "Classic White T-Shirt",
								"image_url": "http://petersapparel.parseapp.com/img/item100-thumb.png",
								"subtitle": "Soft white cotton t-shirt is back in style",
								"buttons": [
									{
										"type": "web_url",
										"url": "https://petersapparel.parseapp.com/view_item?item_id=100",
										"title": "View Item"
									},
									{
										"type": "web_url",
										"url": "https://petersapparel.parseapp.com/buy_item?item_id=100",
										"title": "Buy Item"
									}
								]
							},
							{
								"title": "Classic Grey T-Shirt",
								"image_url": "http://petersapparel.parseapp.com/img/item101-thumb.png",
								"subtitle": "Soft gray cotton t-shirt is back in style",
								"buttons": [
									{
										"type": "web_url",
										"url": "https://petersapparel.parseapp.com/view_item?item_id=101",
										"title": "View Item"
									},
									{
										"type": "web_url",
										"url": "https://petersapparel.parseapp.com/buy_item?item_id=101",
										"title": "Buy Item"
									}
								]
							}
						]
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