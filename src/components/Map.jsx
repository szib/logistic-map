import React, { useState } from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import useLogisticMap from '../hooks/useLogisticMap';

import Square from './Square';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-gap: 0.2em;
  grid-template-rows: ${props => `repeat(${props.width}, 1fr)`};
  grid-template-columns: ${props => `repeat(${props.height}, 1fr)`};
`;

const Map = ({ width, height }) => {
  const [supplyPoints, setSupplyPoints] = useState([]);
  const map = useLogisticMap(width, height, supplyPoints);
  const flatMap = R.flatten(map);

  const toggleSupplyPoint = coord => {
    if (R.contains(coord, supplyPoints)) {
      setSupplyPoints(R.reject(c => R.equals(c, coord), supplyPoints));
    } else {
      setSupplyPoints([...supplyPoints, coord]);
    }
  };

  return (
    <Wrapper height={height} width={width}>
      {flatMap.map((square, idx) => {
        const color = square.distance
          ? `rgba(130,130,20,${1 -
              (square.distance / Math.min(width, height)) * 3})`
          : `rgba(255,255,255,0.2)`;
        return (
          <Square
            distance={square.distance}
            color={color}
            key={idx}
            clickHandler={() => toggleSupplyPoint([square.x, square.y])}
          />
        );
      })}
    </Wrapper>
  );
};

export default Map;
