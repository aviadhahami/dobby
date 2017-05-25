import { DAY_TIME, DIETARY }from '../src/enums/enums';
const { NOON, EVENING, MORNING } = DAY_TIME;
const { FISH, GLUTEN_FREE, KOSHER, MEAT, VEGETERIAN, VEGAN } = DIETARY;


// TODO: Add more restaurants
const db = {
	TOPOLOPOMPO: {
		tags: [NOON, EVENING, MEAT, FISH, VEGAN, VEGETERIAN, GLUTEN_FREE,],
		description: 'something'
	}
};

export default db;