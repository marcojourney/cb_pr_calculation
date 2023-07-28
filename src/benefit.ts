import { EmployeeBenefit } from "cb_pr_calculation";

/**
 * Calculate the net benefit amount received by the employee after tax deduction.
 * @param {EmployeeBenefit} employeeBenefit - The employee benefit details.
 * @returns {number} The calculated net benefit amount.
 */
export function calculateBenefit(employeeBenefit: EmployeeBenefit): number {
   const taxableBenefit = calculateTaxableBenefit(employeeBenefit);

   const netBenefit = employeeBenefit.amount - taxableBenefit;

   return netBenefit;
}

/**
 * Calculate the taxable benefit amount based on the given parameters.
 * @param {number} baseAmount - The base amount for the benefit.
 * @param {boolean} isTaxable - Whether the benefit is taxable or not.
 * @param {"STAFF" | "ORGANIZATION"} offeredBy - The entity offering the benefit ("STAFF" or "ORGANIZATION").
 * @param {number} taxRate - The tax rate applicable to the benefit (percentage).
 * @returns {number} The calculated taxable benefit amount.
 */
 export function calculateTaxableBenefit(employeeBenefit: EmployeeBenefit): number {
   if (!employeeBenefit.isTaxable) {
     return 0;
   }
 
   const taxAmount = (employeeBenefit.amount * employeeBenefit.taxRate) / 100;
 
   return taxAmount;
 }