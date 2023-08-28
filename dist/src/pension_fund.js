"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPensionFund = void 0;
function getPensionFund(grossSalary, rate, pensionFundRates) {
    const foundPensionFund = pensionFundRates.find(value => {
        let status = false;
        if (value.from >= 0 && value.to > 0) {
            status = grossSalary >= value.from && grossSalary <= value.to;
        }
        else if (value.from > 0 && value.to == 0) {
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
exports.getPensionFund = getPensionFund;
