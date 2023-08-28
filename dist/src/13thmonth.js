"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate13Month = void 0;
function calculate13Month(basicSalary, isNewStaffPayroll, workedDay) {
    let annualSalary = 0;
    let annualSalaryByMonth = basicSalary / 12;
    const annualSalaryByDay = annualSalaryByMonth / 22;
    if (isNewStaffPayroll) {
        annualSalary = annualSalaryByDay * workedDay;
    }
    else {
        annualSalary = annualSalaryByMonth;
    }
    return annualSalary;
}
exports.calculate13Month = calculate13Month;
