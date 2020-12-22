import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints/breakpoints";

export const UserProfileStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  .new-user-form {
    &.float-card {
      @media ${breakpoints.xlargeUp} {
        width: 600px;
        max-width: 450px;
        position: fixed;
        left: 50%;
        top: 15%;
        transform: translateX(-50%);
        padding: 20px 40px;
        }
      }
    }
  }
`;

export const UserDescriptionWrapperStyle = styled.div`
  padding: 0 0 10px 0;  
  color: ${props => props.theme.colors.black};
  line-height: 1.8;
`;

export const Header = styled.h2`
  color: ${props => props.theme.colors.black };
`

export const NewUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  min-height: 350px;
  min-width: 250px;
  
  .plus-icon {
    width: 110px;
    margin-bottom: 15px;
  }
`;

export const EditButton = styled.input`
  border: 1px solid transparent;
  background: ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.white};
  padding: 10px 15px;
  cursor: pointer;
  
  &:active, &:focus {
    border: 1px solid transparent;
    outline: none;
  }
  
  &.is-visible-lg {
    @media ${breakpoints.xlargeUp} {
      visibility: hidden
    }
  }
  
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 25px;
  
  input {
    flex: 1;
    text-align: center; 
    
    &:nth-child(odd) {
      margin-right: 10px;
    }
  }
`;

export const H1 = styled.h1`
  color: ${props => props.theme.colors.highlight};
  margin-bottom: 10px;
`;