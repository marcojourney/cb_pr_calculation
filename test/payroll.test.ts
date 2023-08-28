import * as chai from "chai";
import { getTaxRateBySalary, getTaxOnSalary } from '../src/tax';
const assert = chai.assert;

describe("#Salary Calculation", () => {
    const salaryTaxRates: any[] = [];
    const salaryTaxRate1 = { from: 0, to: 1500000, rate: 0 };
    const salaryTaxRate2 = { from: 1500001, to: 2000000, rate: 5 };
    const salaryTaxRate3 = { from: 2000001, to: 8500000, rate: 10 };
    const salaryTaxRate4 = { from: 8500001, to: 12500000, rate: 15 };
    const salaryTaxRate5 = { from: 12500001, to: 0, rate: 20 };

    salaryTaxRates.push(salaryTaxRate1);
    salaryTaxRates.push(salaryTaxRate2);
    salaryTaxRates.push(salaryTaxRate3);
    salaryTaxRates.push(salaryTaxRate4);
    salaryTaxRates.push(salaryTaxRate5);

    describe("#Get Tax On Salary", () => {

        it("Give basic salary:0, should return 0%", () => {
            assert.equal(getTaxOnSalary(0, salaryTaxRates), 0);
        });
        
        it("Give basic salary:100000, should return 0%", () => {
            assert.equal(getTaxOnSalary(100000, salaryTaxRates), 0);
        });
        
        it("Give basic salary:500000, should return 0%", () => {
            assert.equal(getTaxOnSalary(500000, salaryTaxRates), 0);
        });
        
        it("Give basic salary:1500000, should return 0%", () => {
            assert.equal(getTaxOnSalary(1500000, salaryTaxRates), 0);
        });
        
        it("Give basic salary:2000000, should return 5%", () => {
            assert.equal(getTaxOnSalary(2000000, salaryTaxRates), 25000);
        });
        
        it("Give basic salary:3000000, should return 10%", () => {
            assert.equal(getTaxOnSalary(3000000, salaryTaxRates), 125000);
        });
        
        it("Give basic salary:8500000, should return 675000", () => {
            assert.equal(getTaxOnSalary(8500000, salaryTaxRates), 675000);
        });
        
        it("Give basic salary:10000000, should return 10%", () => {
            assert.equal(getTaxOnSalary(10000000, salaryTaxRates), 900000);
        });
        
        it("Give basic salary:12500000, should return 15%", () => {
            assert.equal(getTaxOnSalary(12500000, salaryTaxRates), 1275000);
        });          
    });
    describe("#Get Salary Tax Rate", () => {
        it("Give basic salary:1500000, should return 0%", () => {
            assert.equal(getTaxRateBySalary(1500000, salaryTaxRates), 0);
        });
        
        it("Give basic salary:2000000, should return 5%", () => {
            assert.equal(getTaxRateBySalary(2000000, salaryTaxRates), 5);
        });
        
        it("Give basic salary:3000000, should return 10%", () => {
            assert.equal(getTaxRateBySalary(3000000, salaryTaxRates), 10);
        });
        
        it("Give basic salary:12500000, should return 15%", () => {
            assert.equal(getTaxRateBySalary(12500000, salaryTaxRates), 1275000);
        }); 
    });
});