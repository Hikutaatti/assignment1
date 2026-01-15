import { divide } from '../src/calculator.js';

describe('divide', () => {
    it('divides positive numbers', () => {
        expect(divide(10, 2)).toBe(5);
    });

    it('throws RangeError when dividing by zero', () => {
        expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    });

    it('throws TypeError when arguments are not numbers', () => {
        expect(() => divide('5', 2)).toThrow('Both arguments must be numbers');
    }); 

    it('throws TypeError when divisor is not a number', () => {
        expect(() => divide(5, 'x')).toThrow('Both arguments must be numbers');
    });

    it('throws TypeError when arguments are NaN', () => {
        expect(() => divide(NaN, 2)).toThrow('Arguments cannot be NaN');
    });

});