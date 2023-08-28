import { PensionFundRate } from "cb_pr_calculation";

export function getPensionFund(grossSalary: number, rate: number, pensionFundRates: PensionFundRate[]) {
   const foundPensionFund = pensionFundRates.find(value => {
       let status: boolean = false;
       if (value.from >= 0 && value.to > 0) {
           status = grossSalary >= value.from && grossSalary <= value.to;
       } else if (value.from > 0 && value.to == 0) {
           status = grossSalary >= value.from;
       }
       return status;
   });
   
   if (foundPensionFund) {
       rate = foundPensionFund.rate * 0.01;
       
       if (foundPensionFund.round) {
           grossSalary = foundPensionFund.round;
       }
   }
   
   return grossSalary * rate;
}