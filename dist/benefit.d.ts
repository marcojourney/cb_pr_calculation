import { EmployeeBenefit } from "cb_pr_calculation";
/**
 * Calculate the net benefit amount received by the employee after tax deduction.
 * @param {EmployeeBenefit} employeeBenefit - The employee benefit details.
 * @returns {number} The calculated net benefit amount.
 */
export declare function calculateBenefit(employeeBenefit: EmployeeBenefit): number;
/**
 * Calculate the taxable benefit amount based on the given parameters.
 * @param {number} baseAmount - The base amount for the benefit.
 * @param {boolean} isTaxable - Whether the benefit is taxable or not.
 * @param {"STAFF" | "ORGANIZATION"} offeredBy - The entity offering the benefit ("STAFF" or "ORGANIZATION").
 * @param {number} taxRate - The tax rate applicable to the benefit (percentage).
 * @returns {number} The calculated taxable benefit amount.
 */
export declare function calculateTaxableBenefit(employeeBenefit: EmployeeBenefit): number;
