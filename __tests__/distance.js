const hubeny = require('../index');

test('distance between Tokyo and Tsukuba', () => {
  const distance = hubeny.distance(35.65500, 139.74472, 36.10056, 140.09111);
  expect(distance).toBeCloseTo(58502.458931819616);
});
