import db from './../../config/db';
import _ from 'lodash';

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
	let results = [];
	let maxIntersect = 0;
	
	for (const entry in db) {
		aggregation[entry.id] = _.intersection(userInput, entry.tags).length;
		maxIntersect = Math.max(aggregation[entry.id], maxIntersect);
	}
	
	for (const key in aggregation) {
		if ( aggregation[key] >= maxIntersect - 1 ) {
			results.push(key);
		}
	}
	
	const finalResult = [];
	
	let randomIndex = Math.round(Math.random() * results.length + 1);
	finalResult.push(results[randomIndex]);
	
	results.splice(randomIndex, 1);
	randomIndex = Math.round(Math.random() * results.length + 1);
	finalResult.push(results[randomIndex]);
	return finalResult;

	
	
};
export default algorithm
