import { DAY_TIME, DIETARY }from './../enums/enums';
const { NOON, EVENING, MORNING } = DAY_TIME;
const { FISH, GLUTEN_FREE, KOSHER, MEAT, VEGETERIAN, VEGAN } = DIETARY;

const db = {
	TOPOLOPOMPO: {
		tags: [NOON, EVENING, MEAT, FISH, VEGAN, VEGETERIAN, GLUTEN_FREE,],
		description: ''
	}
};

export default db;