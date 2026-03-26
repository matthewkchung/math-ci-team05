import { describe, it, expect } from 'vitest';
import {
  add,
  subtract,
  multiply,
  divide,
  factorial,
  power,
  average,
  clamp,
  quadratic,
} from './math';

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
  it('handles negative numbers', () => {
    expect(add(-1, -4)).toBe(-5);
  });
});

describe('subtract', () => {
  it('subtracts two numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });
});

describe('multiply', () => {
  it('multiplies two numbers', () => {
    expect(multiply(3, 7)).toBe(21);
  });
  it('returns zero when multiplied by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });
});

describe('divide', () => {
  it('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });
  it('returns null for division by zero', () => {
    expect(divide(5, 0)).toBeNull();
  });
});

describe('factorial', () => {
  it('computes factorial of 5', () => {
    expect(factorial(5)).toBe(120);
  });
  it('returns one for factorial of zero', () => {
    expect(factorial(0)).toBe(1);
  });
  it('returns null for negative input', () => {
    expect(factorial(-67)).toBeNull();
  });
});

describe('power', () => {
  it('raises two to the power of three', () => {
    expect(power(2, 3)).toBe(8);
  });
  it('returns 1 for raising to the 0th power', () => {
    expect(power(5, 0)).toBe(1);
  });
});

describe('average', () => {
  it('takes the average of [2, 4, 6]', () => {
    expect(average([2, 4, 6])).toBe(4);
  });
  it('returns null for an empty array', () => {
    expect(average([])).toBeNull();
  });
});

describe('clamp', () => {
  it('clamps the following: 2, 4, 6', () => {
    expect(clamp(2, 4, 6)).toBe(4);
  });
  it('handles negative numbers', () => {
    expect(clamp(-9, -7, -5)).toBe(-7);
  });
});

describe('quadratic', () => {
  it('computes the real roots of (1, 7, 10)', () => {
    expect(quadratic(1, 7, 10)).toEqual([-2, -5]);
  });
  it('returns null if the disciminant is negative', () => {
    expect(quadratic(3, 0, 2)).toBeNull();
  });
});
