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

function calculateBonus(basicSalary, bonusPercentage) {
   return (basicSalary * bonusPercentage) / 100;
}

module.exports = {
   calculateSalary,
   calculateBonus
};