import { lighten, darken } from './color';

describe('color', () => {
  test('lighten should return the correct color when lightening', () => {
    const result = lighten('#4C5663', 0.2);
    expect(result).toBe('#5B6777');
  });

  test('darken should return the correct color when darkening', () => {
    const result = darken('#4C5663', 0.2);
    expect(result).toBe('#3D454F');
  });
});
