import { SalaryCalculationResult } from "cb_pr_calculation";
/**
 * Calculate the salary components based on the given parameters.
 * @param {number} basicSalary - The basic salary amount.
 * @param {number} bonusPercentage - The bonus percentage.
 * @param {number} taxPercentage - The tax percentage.
 * @returns {SalaryCalculationResult} An object containing the calculated salary components.
 */
export declare function calculateSalary(basicSalary: number, bonusPercentage: number, taxPercentage: number): SalaryCalculationResult;
/**
 * Calculate the hourly salary based on the monthly basic salary and the number of workdays in a month.
 * @param {number} monthlyBasicSalary - The monthly basic salary of the employee.
 * @param {number} workdaysPerMonth - The number of workdays in a month.
 * @returns {number} The calculated hourly salary.
 * @throws {Error} If the monthly basic salary or workdays per month are not valid (non-positive numbers).
 */
export declare function calculateSalaryByHour(basicSalary: number, workdaysPerMonth: number): number;
