/**
 *
 * @param time
 * @param budget
 * @param atmosphere
 * @param special_type
 */
const convertToHebrew = (str = '') => decodeURIComponent(str).replace('+', ' ');

const algorithm = (time, budget, atmosphere, special_type) => {
	const timeAsHebrew = convertToHebrew(time);
	const budgetAsHebrew = convertToHebrew(budget);
	const atmosphereAsHebrew = convertToHebrew(atmosphere);
	const specialTypeAsHebrew = convertToHebrew(special_type);
	
	const userInput = [timeAsHebrew, budgetAsHebrew, atmosphereAsHebrew, specialTypeAsHebrew];
	const aggregation = {};
	const results = [];
	let maxIntersect = 0;
	
	
	// Go over all options in table, for each option
	// insert option to aggregating hash s.t. {option: # of intersect }
	// set maxInterset = 4
	// for each key in aggregation, if agg[opt] == maxIntersct => put in array.
	// amountLeft--;
	// when finished iteration, maxIntersect--;
	
	
};
export default algorithm
