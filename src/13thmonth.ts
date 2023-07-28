export function calculate13Month(basicSalary: number, isNewStaffPayroll: boolean, workedDay: number): number {
   let annualSalary: number = 0;
   let annualSalaryByMonth: number = basicSalary / 12;
   const annualSalaryByDay: number = annualSalaryByMonth / 22;

   if (isNewStaffPayroll) {
      annualSalary = annualSalaryByDay * workedDay;
   } else {
      annualSalary = annualSalaryByMonth;
   }

   return annualSalary;
}