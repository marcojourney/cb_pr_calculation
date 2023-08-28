"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaxOnSalary = exports.getTaxRateBySalary = void 0;
function getTaxRateBySalary(salary, salaryTaxRates) {
    const foundSalaryTaxRate = salaryTaxRates.find(value => {
        let status = false;
        if (value.from >= 0 && value.to > 0) {
            status = salary >= value.from && salary <= value.to;
        }
        else if (value.from > 0 && value.to == 0) {
            status = salary >= value.from;
        }
        return status;
    });
    return foundSalaryTaxRate ? foundSalaryTaxRate.rate : 0;
}
exports.getTaxRateBySalary = getTaxRateBySalary;
function getTaxOnSalary(salary, salaryTaxRates) {
    const matchTaxRateAtIndex = salaryTaxRates.findIndex(value => {
        let status = false;
        if (value.from >= 0 && value.to > 0) {
            status = salary >= value.from && salary <= value.to;
        }
        else if (value.from > 0 && value.to == 0) {
            status = salary >= value.from;
        }
        return status;
    });
    let taxAmount = 0;
    let foundSalaryTaxRate;
    let rate = 0;
    if (matchTaxRateAtIndex >= 0) {
        foundSalaryTaxRate = salaryTaxRates[matchTaxRateAtIndex];
        rate = foundSalaryTaxRate.rate / 100;
    }
    if (matchTaxRateAtIndex > 0) {
        const previousSalaryTaxRate = salaryTaxRates[matchTaxRateAtIndex - 1];
        taxAmount += (salary - previousSalaryTaxRate.to) * rate;
        for (let i = 0; i < matchTaxRateAtIndex; i++) {
            rate = salaryTaxRates[i].rate / 100;
            if (i > 0) {
                taxAmount += (salaryTaxRates[i].to - salaryTaxRates[i - 1].to) * rate;
            }
            else {
                taxAmount += salaryTaxRates[i].to * rate;
            }
        }
    }
    else {
        taxAmount = salary * rate;
    }
    return taxAmount;
}
exports.getTaxOnSalary = getTaxOnSalary;
