import styled from 'styled-components';
import { boxShadow } from "../../styles/mixins/boxShadow";
import { breakpoints } from "../../styles/breakpoints/breakpoints";

const CardStyle = styled.div`
  border-radius: 4px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
  flex: 1;
  
  @media ${breakpoints.largeUp} {
    margin: 0 20px 20px 0;
  }
  
  @media ${breakpoints.smallUp} and ${breakpoints.mediumBelow} {
    flex: 0 calc(50% - 10px);
    
    &:nth-child(odd) {
      margin-right: 20px;
    }
  }
  
  @media ${breakpoints.largeUp} {
    flex: 1 1 30%;
    max-width: 300px;
  }
  
  &:hover {
    ${boxShadow('0px', '0px', '7px', '3px', `33, 33, 33`, '0.1')};
  }
  
  .is-visible-lg {
    @media ${breakpoints.xlargeUp} {
      visibility: hidden
    }
  }

  
  &.float-card {
    position: fixed;
    z-index: 2;
    background: ${props => props.theme.colors.white };
    ${boxShadow('0px', '0px', '7px', '3px', `33, 33, 33`, '0.7')};
    
    @media ${breakpoints.smallBelow} {
      width: calc(100% - 40px);
    }
    
    @media ${breakpoints.smallUp} {
      position: relative;
      width: 100%;
    }
    
    @media ${breakpoints.mediumUp} {
      width: inherit; 
    }
    
    @media ${breakpoints.largeUp}{ 
        min-width: 350px;
    }
   
    img {
      max-width: 100%;
    }
  }
  

`;

export default CardStyle;
