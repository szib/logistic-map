const useLogisticMap = (width, height, supplyPoints) =>
  Array(height)
    .fill(0)
    .map((_, y) =>
      Array(width)
        .fill(0)
        .map((_, x) => [x, y])
    )
    .map(row =>
      row.map(coord =>
        !supplyPoints.length
          ? { x: coord[0], y: coord[1], distance: null }
          : supplyPoints.reduce(
              (obj, _, i) => {
                const dist =
                  Math.abs(supplyPoints[i][0] - coord[0]) +
                  Math.abs(supplyPoints[i][1] - coord[1]);
                if (dist < obj.distance) obj.distance = dist;
                return obj;
              },
              { x: coord[0], y: coord[1], distance: Number.MAX_SAFE_INTEGER }
            )
      )
    );

export default useLogisticMap;
