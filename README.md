# cb_pr_calculation

A reusable npm package to calculate salary for companies in Cambodia.

[![NPM Version](https://img.shields.io/npm/v/cb_pr_calculation.svg)](https://www.npmjs.com/package/cb_pr_calculation)
[![License](https://img.shields.io/npm/l/cb_pr_calculation.svg)](https://github.com/your-username/cb_pr_calculation/blob/main/LICENSE)

## Installation

npm install cb_pr_calculation

## Usage

```javascript
const { calculateSalary, calculateBonus } = require('your-package-name');

// Calculate salary
const salaryResult = calculateSalary(50000, 10, 20);
console.log(salaryResult.netSalary);

// Calculate bonus
const bonusAmount = calculateBonus(50000, 10);
console.log(bonusAmount);


## API Reference
calculateSalary(basicSalary, bonusPercentage, taxPercentage)
Calculate salary based on the provided basicSalary, bonusPercentage, and taxPercentage.

Parameters:

basicSalary (number): The basic salary amount.
bonusPercentage (number): The bonus percentage to be applied to the basic salary.
taxPercentage (number): The tax percentage to be applied to the total taxable amount.
Returns:

SalaryCalculationResult (object): An object containing the calculated salary details:

basicSalary (number): The basic salary amount.
bonusAmount (number): The calculated bonus amount.
taxableAmount (number): The total taxable amount after adding the bonus.
taxAmount (number): The calculated tax amount based on the taxable amount.
netSalary (number): The final net salary after deducting the tax amount.
calculateBonus(basicSalary, bonusPercentage)
Calculate bonus amount based on the provided basicSalary and bonusPercentage.

Parameters:

basicSalary (number): The basic salary amount.
bonusPercentage (number): The bonus percentage to be applied to the basic salary.
Returns:

number: The calculated bonus amount.

## License
YourPackageName is open-source software licensed under the MIT license.

## Contribution
Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.

## Support
If you encounter any problems or have questions, please open an issue on GitHub.

## Acknowledgments
Special thanks to Sophanna M. for creating this amazing npm package.