import colorHealth from '../app';
test('healthy', () => {
  
    expect(colorHealth("Маг", 80)).toBe('healthy');
  });
  
test('wounded', () => {
    

    expect(colorHealth("Маг", 40)).toBe('wounded');
  });
  
  test('critical', () => {
  
    expect(colorHealth("Маг", 5)).toBe('critical');
  });