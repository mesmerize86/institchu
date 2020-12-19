import React from 'react';
import styled from 'styled-components';
import { breakpoints } from "./styles/breakpoints/breakpoints";

/* ui components */
import Card from './ui-components/card/card';

/* styles*/
import { flexbox, flexWraps } from "./styles/mixins/flexbox";

const MainWrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  ${ flexbox };
  ${ flexWraps('wrap') };
  
  @media ${breakpoints.largeUp} {
    padding: 40px;
  }
`;

const App = ()=> {
  return (
    <MainWrapper>
      <Card />
    </MainWrapper>
);
}

export default App;
