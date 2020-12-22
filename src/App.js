import React from 'react';
import styled from 'styled-components';
import { breakpoints } from "./styles/breakpoints/breakpoints";

/* ui components */
import UserProfile from './ui-components/user-profile/user-profile';



const MainWrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media ${breakpoints.largeUp} {
    padding: 40px;
  }
`;

const App = ()=> {
  return (
    <MainWrapper>
      <UserProfile />
    </MainWrapper>
);
}

export default App;
