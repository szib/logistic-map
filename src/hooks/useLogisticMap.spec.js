import useLogisticMap from './useLogisticMap';

const getDistanceArray = arr => arr.map(o => o.distance);

describe('Basic tests', () => {
  it('has x, y and distance proerty', () => {
    const result = useLogisticMap(3, 3, [[0, 0]])[0][0];
    expect(result).toHaveProperty('x', 0);
    expect(result).toHaveProperty('y', 0);
    expect(result).toHaveProperty('distance', 0);
  });
  it('useLogisticMap(3, 3, [[0, 0]])', () => {
    expect(useLogisticMap(3, 3, [[0, 0]]).map(getDistanceArray)).toStrictEqual([
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4]
    ]);
  });
  it('useLogisticMap(3, 3, [[2,2]])', () => {
    expect(useLogisticMap(3, 3, [[2, 2]]).map(getDistanceArray)).toStrictEqual([
      [4, 3, 2],
      [3, 2, 1],
      [2, 1, 0]
    ]);
  });
  it('useLogisticMap(1, 1, [[0, 0]])', () => {
    expect(useLogisticMap(1, 1, [[0, 0]]).map(getDistanceArray)).toStrictEqual([
      [0]
    ]);
  });
  it('useLogisticMap(5, 2, [[0,0],[4,0]])', () => {
    expect(
      useLogisticMap(5, 2, [[0, 0], [4, 0]]).map(getDistanceArray)
    ).toStrictEqual([[0, 1, 2, 1, 0], [1, 2, 3, 2, 1]]);
  });
  it('useLogisticMap(2, 2, [])', () => {
    expect(useLogisticMap(2, 2, [], []).map(getDistanceArray)).toStrictEqual([
      [null, null],
      [null, null]
    ]);
  });
});
