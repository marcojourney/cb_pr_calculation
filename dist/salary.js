"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSalaryByHour = exports.calculateSalary = void 0;
function calculateSalary(basicSalary, bonusPercentage, taxPercentage) {
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
exports.calculateSalary = calculateSalary;
function calculateSalaryByHour(basicSalary, workDayPerMonth) {
    return basicSalary / workDayPerMonth;
}
exports.calculateSalaryByHour = calculateSalaryByHour;
