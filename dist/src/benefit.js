"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTaxableBenefit = exports.calculateBenefit = void 0;
/**
 * Calculate the net benefit amount received by the employee after tax deduction.
 * @param {EmployeeBenefit} employeeBenefit - The employee benefit details.
 * @returns {number} The calculated net benefit amount.
 */
function calculateBenefit(employeeBenefit) {
    const taxableBenefit = calculateTaxableBenefit(employeeBenefit);
    const netBenefit = employeeBenefit.amount - taxableBenefit;
    return netBenefit;
}
exports.calculateBenefit = calculateBenefit;
/**
 * Calculate the taxable benefit amount based on the given parameters.
 * @param {number} baseAmount - The base amount for the benefit.
 * @param {boolean} isTaxable - Whether the benefit is taxable or not.
 * @param {"STAFF" | "ORGANIZATION"} offeredBy - The entity offering the benefit ("STAFF" or "ORGANIZATION").
 * @param {number} taxRate - The tax rate applicable to the benefit (percentage).
 * @returns {number} The calculated taxable benefit amount.
 */
function calculateTaxableBenefit(employeeBenefit) {
    if (!employeeBenefit.isTaxable) {
        return 0;
    }
    const taxAmount = (employeeBenefit.amount * employeeBenefit.taxRate) / 100;
    return taxAmount;
}
exports.calculateTaxableBenefit = calculateTaxableBenefit;
