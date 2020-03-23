import { lighten, darken } from './color';

test('lighten should return the correct color when lightening', () => {
  expect(lighten('#4C5663', 0.2)).toBe('#5B6777');
});

test('darken should return the correct color when darkening', () => {
  expect(darken('#4C5663', 0.2)).toBe('#3D454F');
});
