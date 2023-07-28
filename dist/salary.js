"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSalaryByHour = exports.calculateSalary = void 0;
/**
 * Calculate the salary components based on the given parameters.
 * @param {number} basicSalary - The basic salary amount.
 * @param {number} bonusPercentage - The bonus percentage.
 * @param {number} taxPercentage - The tax percentage.
 * @returns {SalaryCalculationResult} An object containing the calculated salary components.
 */
function calculateSalary(basicSalary, bonusPercentage, taxPercentage) {
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
exports.calculateSalary = calculateSalary;
/**
 * Calculate the bonus amount based on the basic salary and bonus percentage.
 * @param {number} basicSalary - The basic salary amount.
 * @param {number} bonusPercentage - The bonus percentage.
 * @returns {number} The calculated bonus amount.
 */
function calculateBonusAmount(basicSalary, bonusPercentage) {
    return (basicSalary * bonusPercentage) / 100;
}
/**
 * Calculate the taxable amount based on the basic salary and bonus amount.
 * @param {number} basicSalary - The basic salary amount.
 * @param {number} bonusAmount - The bonus amount.
 * @returns {number} The calculated taxable amount.
 */
function calculateTaxableAmount(basicSalary, bonusAmount) {
    return basicSalary + bonusAmount;
}
/**
 * Calculate the tax amount based on the taxable amount and tax percentage.
 * @param {number} taxableAmount - The taxable amount.
 * @param {number} taxPercentage - The tax percentage.
 * @returns {number} The calculated tax amount.
 */
function calculateTaxAmount(taxableAmount, taxPercentage) {
    return (taxableAmount * taxPercentage) / 100;
}
/**
 * Calculate the net salary based on the taxable amount and tax amount.
 * @param {number} taxableAmount - The taxable amount.
 * @param {number} taxAmount - The tax amount.
 * @returns {number} The calculated net salary.
 */
function calculateNetSalary(taxableAmount, taxAmount) {
    return taxableAmount - taxAmount;
}
/**
 * Calculate the hourly salary based on the monthly basic salary and the number of workdays in a month.
 * @param {number} monthlyBasicSalary - The monthly basic salary of the employee.
 * @param {number} workdaysPerMonth - The number of workdays in a month.
 * @returns {number} The calculated hourly salary.
 * @throws {Error} If the monthly basic salary or workdays per month are not valid (non-positive numbers).
 */
function calculateSalaryByHour(basicSalary, workdaysPerMonth) {
    if (basicSalary <= 0 || workdaysPerMonth <= 0) {
        throw new Error("Monthly basic salary and workdays per month must be positive numbers.");
    }
    return basicSalary / workdaysPerMonth;
}
exports.calculateSalaryByHour = calculateSalaryByHour;
