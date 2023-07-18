interface SalaryCalculationResult {
   basicSalary: number;
   bonusAmount: number;
   taxableAmount: number;
   taxAmount: number;
   netSalary: number;
}
 
function calculateSalary(basicSalary: number, bonusPercentage: number, taxPercentage: number): SalaryCalculationResult {
   const bonusAmount = (basicSalary * bonusPercentage) / 100;
   const taxableAmount = basicSalary + bonusAmount;
   const taxAmount = (taxableAmount * taxPercentage) / 100;
   const netSalary = taxableAmount - taxAmount;

   return {
      basicSalary,
      bonusAmount,
      taxableAmount,
      taxAmount,
      netSalary,
   };
}
 
export default calculateSalary;
 