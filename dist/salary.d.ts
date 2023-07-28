import { SalaryCalculationResult } from "cb_pr_calculation";
export declare function calculateSalary(basicSalary: number, bonusPercentage: number, taxPercentage: number): SalaryCalculationResult;
export declare function calculateSalaryByHour(basicSalary: number, workDayPerMonth: number): number;
