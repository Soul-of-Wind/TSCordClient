import {describe, expect, it} from 'vitest';
import required from '@/assets/rules/required.ts';

describe('Test require rule', () => {
  it('Функция существует', () => {
    expect(required).toBeDefined();
  });

  it('Функция вернет true если переданное значение 0', () => {
    expect(required(0)).toBe(true);
  });

  it('Функция вернет true если переданное значение false', () => {
    expect(required(false)).toBe(true);
  });

  it('Функция вернет false если переданное значение пустая строка', () => {
    expect(required('')).toBe(false);
  });
});