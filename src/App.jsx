import React, { useState } from 'react';

import Container from './components/Container';
import Map from './components/Map';

const App = () => {
  const [width, setWidth] = useState(30);
  const [height, setHeight] = useState(30);

  return (
    <Container>
      <Map width={width} height={height} />
    </Container>
  );
};

export default App;
