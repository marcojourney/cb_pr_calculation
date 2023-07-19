// Type declaration for the SalaryCalculationResult interface
export interface SalaryCalculationResult {
   basicSalary: number;
   bonusAmount: number;
   taxableAmount: number;
   taxAmount: number;
   netSalary: number;
}

// Function signature for calculateSalary
declare function calculateSalary(
   basicSalary: number,
   bonusPercentage: number,
   taxPercentage: number
): SalaryCalculationResult;

// Type declaration for the new function
declare function calculateBonus(
   basicSalary: number,
   bonusPercentage: number
): number;

export { calculateSalary, calculateBonus };