import MathService from './../src/service/math-service.js'

describe('Math functions', () => {
  it('should correctly add two numbers', () => {
    const math = new MathService();
    const addMock = jest.fn(math.add);
    expect(addMock(2, 3)).toBe(5);
    expect(addMock).toHaveBeenCalledWith(2, 3);
  });

  it('should correctly subtract two numbers', () => {
    const math = new MathService();
    const subtractMock = jest.fn(math.substract);

    expect(subtractMock(50, 8)).toBe(42);
    expect(subtractMock).toHaveBeenCalledWith(50, 8);
  });

  it('should correctly subtract two numbers', () => {
    const math = new MathService();
    const subtractMock = jest.spyOn(math, 'substract');

    subtractMock.mockImplementation(() => 42);

    expect(subtractMock(50, 8)).toBe(42);
    expect(subtractMock).toHaveBeenCalledWith(50, 8);

    subtractMock.mockRestore();
  });
});