// Declare a module named "cb_pr_calculation".
declare module "cb_pr_calculation" {
	// Export an interface representing the result of salary calculation.
	export interface SalaryCalculationResult {
	  basicSalary: number;
	  bonusAmount: number;
	  taxableAmount: number;
	  taxAmount: number;
	  netSalary: number;
	}
 
	// Export a function named "calculateSalary" that calculates the salary based on provided parameters.
	// It takes basicSalary, bonusPercentage, and taxPercentage as input and returns a SalaryCalculationResult object.
	export function calculateSalary(
	  basicSalary: number,
	  bonusPercentage: number,
	  taxPercentage: number
	): SalaryCalculationResult;
 
	// Export a function named "calculateBonus" that calculates the bonus amount based on provided parameters.
	// It takes basicSalary and bonusPercentage as input and returns the calculated bonus amount as a number.
	export function calculateBonus(basicSalary: number, bonusPercentage: number): number;
} 