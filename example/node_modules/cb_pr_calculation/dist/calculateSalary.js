"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = calculateSalary;
