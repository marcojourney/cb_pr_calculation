export function getTaxRateBySalary(salary: number, salaryTaxRates: any[]) {
   const foundSalaryTaxRate = salaryTaxRates.find(value => {
       let status: boolean = false;
       if (value.from >= 0 && value.to > 0) {
           status = salary >= value.from && salary <= value.to;
       } else if (value.from > 0 && value.to == 0) {
           status = salary >= value.from;
       }

       return status;
   });

   return foundSalaryTaxRate ? foundSalaryTaxRate.rate : 0;
}

export function getTaxOnSalary(salary: number, salaryTaxRates: any[]) {
   const matchTaxRateAtIndex: number = salaryTaxRates.findIndex(value => {
       let status: boolean = false;
       if (value.from >= 0 && value.to > 0) {
           status = salary >= value.from && salary <= value.to;
       } else if (value.from > 0 && value.to == 0) {
           status = salary >= value.from;
       }

       return status;
   });

   let taxAmount: number = 0;

   let foundSalaryTaxRate: any;
   let rate: number = 0;

   if (matchTaxRateAtIndex >= 0) {
       foundSalaryTaxRate = salaryTaxRates[matchTaxRateAtIndex];
       rate = foundSalaryTaxRate.rate / 100;
   }

   if (matchTaxRateAtIndex > 0) {
       const previousSalaryTaxRate: any = salaryTaxRates[matchTaxRateAtIndex - 1];
       taxAmount += (salary - previousSalaryTaxRate.to) * rate;

       for (let i = 0; i < matchTaxRateAtIndex; i++) {
           rate = salaryTaxRates[i].rate / 100;

           if (i > 0) {
               taxAmount += (salaryTaxRates[i].to - salaryTaxRates[i - 1].to) * rate;
           } else {
               taxAmount += salaryTaxRates[i].to * rate;
           }
           
       }
   } else {
       taxAmount = salary * rate;
   }

   return taxAmount;
}