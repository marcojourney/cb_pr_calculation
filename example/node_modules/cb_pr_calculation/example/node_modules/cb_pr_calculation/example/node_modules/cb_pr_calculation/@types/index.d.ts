declare module "cb_pr_calculation" {
   interface SalaryCalculationResult {
     basicSalary: number;
     bonusAmount: number;
     taxableAmount: number;
     taxAmount: number;
     netSalary: number;
   }
 
   export function calculateSalary(basicSalary: number, bonusPercentage: number, taxPercentage: number): SalaryCalculationResult;
 
   export function calculateBonus(basicSalary: number, bonusPercentage: number): number;
} 