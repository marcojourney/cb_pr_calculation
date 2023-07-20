# cb_pr_calculation

A reusable npm package to calculate salary for companies in Cambodia.

[![NPM Version](https://img.shields.io/npm/v/cb_pr_calculation.svg)](https://www.npmjs.com/package/cb_pr_calculation)
[![License](https://img.shields.io/npm/l/cb_pr_calculation.svg)](https://github.com/your-username/cb_pr_calculation/blob/main/LICENSE)

## Installation

npm install cb_pr_calculation

<h2>Usage</h2>

<pre>
<code>const { calculateSalary, calculateBonus } = require('your-package-name');

// Calculate salary
const salaryResult = calculateSalary(50000, 10, 20);
console.log(salaryResult.netSalary);

// Calculate bonus
const bonusAmount = calculateBonus(50000, 10);
console.log(bonusAmount);
</code>
</pre>

<h2>API Reference</h2>

<h3><code>calculateSalary(basicSalary, bonusPercentage, taxPercentage)</code></h3>

<p>
  Calculate salary based on the provided <code>basicSalary</code>, <code>bonusPercentage</code>, and <code>taxPercentage</code>.
</p>

<h4>Parameters:</h4>

<ul>
  <li><code>basicSalary</code> (number): The basic salary amount.</li>
  <li><code>bonusPercentage</code> (number): The bonus percentage to be applied to the basic salary.</li>
  <li><code>taxPercentage</code> (number): The tax percentage to be applied to the total taxable amount.</li>
</ul>

<h4>Returns:</h4>

<p>
  <code>SalaryCalculationResult</code> (object): An object containing the calculated salary details:
</p>

<ul>
  <li><code>basicSalary</code> (number): The basic salary amount.</li>
  <li><code>bonusAmount</code> (number): The calculated bonus amount.</li>
  <li><code>taxableAmount</code> (number): The total taxable amount after adding the bonus.</li>
  <li><code>taxAmount</code> (number): The calculated tax amount based on the taxable amount.</li>
  <li><code>netSalary</code> (number): The final net salary after deducting the tax amount.</li>
</ul>

<h3><code>calculateBonus(basicSalary, bonusPercentage)</code></h3>

<p>
  Calculate bonus amount based on the provided <code>basicSalary</code> and <code>bonusPercentage</code>.
</p>

<h4>Parameters:</h4>

<ul>
  <li><code>basicSalary</code> (number): The basic salary amount.</li>
  <li><code>bonusPercentage</code> (number): The bonus percentage to be applied to the basic salary.</li>
</ul>

<h4>Returns:</h4>

<p>
  <code>number</code>: The calculated bonus amount.
</p>

<h2>License</h2>

<p>cb_pr_calculation is open-source software licensed under the <a href="https://github.com/your-username/your-package-name/blob/main/LICENSE">MIT license</a</p>

<h2>Contribution</h2>

<p>Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.</p>

<h2>Support</h2>

<p>If you encounter any problems or have questions, please <a href="https://github.com/your-username/your-package-name/issues">open an issue</a> on GitHub.</p>

<h2>Acknowledgments</h2>

<p>Special thanks to Sophanna M. for creating this amazing npm package.</p>