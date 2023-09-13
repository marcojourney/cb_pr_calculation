import { SalaryCalculationResult } from "cb_pr_calculation";

/**
 * Calculate the salary components based on the given parameters.
 * @param {number} basicSalary - The basic salary amount.
 * @param {number} bonusPercentage - The bonus percentage.
 * @param {number} taxPercentage - The tax percentage.
 * @returns {SalaryCalculationResult} An object containing the calculated salary components.
 */
export function calculateSalary(basicSalary: number, bonusPercentage: number, taxPercentage: number): SalaryCalculationResult {
  const bonusAmount = calculateBonusAmount(basicSalary, bonusPercentage);
  const taxableAmount = calculateTaxableAmount(basicSalary, bonusAmount);
  const taxAmount = calculateTaxAmount(taxableAmount, taxPercentage);
  const netSalary = calculateNetSalary(taxableAmount, taxAmount);

  return {
    basicSalary,
    bonusAmount,
    taxableAmount,
    taxAmount,
    netSalary,
  };
}

/**
 * Calculate the bonus amount based on the basic salary and bonus percentage.
 * @param {number} basicSalary - The basic salary amount.
 * @param {number} bonusPercentage - The bonus percentage.
 * @returns {number} The calculated bonus amount.
 */
function calculateBonusAmount(basicSalary: number, bonusPercentage: number): number {
  return (basicSalary * bonusPercentage) / 100;
}

/**
 * Calculate the taxable amount based on the basic salary and bonus amount.
 * @param {number} basicSalary - The basic salary amount.
 * @param {number} bonusAmount - The bonus amount.
 * @returns {number} The calculated taxable amount.
 */
function calculateTaxableAmount(basicSalary: number, bonusAmount: number): number {
  return basicSalary + bonusAmount;
}

/**
 * Calculate the tax amount based on the taxable amount and tax percentage.
 * @param {number} taxableAmount - The taxable amount.
 * @param {number} taxPercentage - The tax percentage.
 * @returns {number} The calculated tax amount.
 */
function calculateTaxAmount(taxableAmount: number, taxPercentage: number): number {
  return (taxableAmount * taxPercentage) / 100;
}

/**
 * Calculate the net salary based on the taxable amount and tax amount.
 * @param {number} taxableAmount - The taxable amount.
 * @param {number} taxAmount - The tax amount.
 * @returns {number} The calculated net salary.
 */
function calculateNetSalary(taxableAmount: number, taxAmount: number): number {
  return taxableAmount - taxAmount;
}

/**
 * Calculate the hourly salary based on the monthly basic salary and the number of workdays in a month.
 * @param {number} monthlyBasicSalary - The monthly basic salary of the employee.
 * @param {number} monthlyBasicSalary - The monthly basic salary of the employee.
 * @param {number} workdaysPerMonth - The number of workdays in a month.
 * @returns {number} The calculated hourly salary.
 * @throws {Error} If the monthly basic salary or workdays per month are not valid (non-positive numbers).
 */
export function calculateSalaryByHour(basicSalary: number, workhoursPerDay: number, workdaysPerMonth: number): number {
  if (basicSalary <= 0 || workdaysPerMonth <= 0) {
    throw new Error("Monthly basic salary and workdays per month must be positive numbers.");
  }
	return basicSalary / workdaysPerMonth / workhoursPerDay;
}

/**
 * Calculate the hourly salary based on the monthly basic salary and the number of workdays in a month.
 * @param {number} monthlyBasicSalary - The monthly basic salary of the employee.
 * @param {number} workdaysPerMonth - The number of workdays in a month.
 * @returns {number} The calculated hourly salary.
 * @throws {Error} If the monthly basic salary or workdays per month are not valid (non-positive numbers).
 */
 export function calculateSalaryByDay(basicSalary: number, workdaysPerMonth: number): number {
  if (basicSalary <= 0 || workdaysPerMonth <= 0) {
    throw new Error("Monthly basic salary and workdays per month must be positive numbers.");
  }
	return basicSalary / workdaysPerMonth;
}