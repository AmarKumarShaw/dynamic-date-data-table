import { formatCurrency, formatDate } from '../formatters';

describe('formatCurrency', () => {
  it('should format number to USD currency', () => {
    expect(formatCurrency(1000)).toBe('$1,000.00');
    expect(formatCurrency(1000000)).toBe('$1,000,000.00');
  });

  it('should handle zero and negative numbers', () => {
    expect(formatCurrency(0)).toBe('$0.00');
    expect(formatCurrency(-1000)).toBe('-$1,000.00');
  });
});

describe('formatDate', () => {
  it('should format date to MMM dd', () => {
    const date = new Date('2023-04-30');
    expect(formatDate(date)).toBe('Apr 30');
  });

  it('should handle different months and days', () => {
    const date1 = new Date('2023-01-01');
    const date2 = new Date('2023-12-31');
    expect(formatDate(date1)).toBe('Jan 1');
    expect(formatDate(date2)).toBe('Dec 31');
  });
});