import mirror from 'key-mirror';

const DAY_TIME = mirror({
	MORNING: null,
	NOON: null,
	EVENING: null
});

const DIETARY = mirror({
	MEAT: null,
	FISH: null,
	KOSHER: null,
	VEGAN: null,
	VEGETERIAN: null,
	GLUTEN_FREE: null,
});


export {
	DAY_TIME,
	DIETARY
}