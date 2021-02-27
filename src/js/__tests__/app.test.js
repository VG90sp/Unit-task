/* eslint-disable no-undef */
import colorHealth from '../app';

test('healthy', () => {
  // eslint-disable-next-line no-undef
  expect(colorHealth('Маг', 80)).toBe('healthy');
});

test('wounded', () => {
  expect(colorHealth('Маг', 40)).toBe('wounded');
});

test('critical', () => {
  // eslint-disable-next-line no-undef
  expect(colorHealth('Маг', 5)).toBe('critical');
});
