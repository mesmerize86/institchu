import styled from 'styled-components';
import { boxShadow } from "../../styles/mixins/boxShadow";
import { transition } from "../../styles/mixins/transition";
import {flexbox, flex, justifyContent, alignItems, flexDirection} from '../../styles/mixins/flexbox';
import { transform } from "../../styles/mixins/transform";
import { breakpoints } from "../../styles/breakpoints/breakpoints";

export const CardStyle = styled.div`
  border-radius: 4px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
  
  @media ${breakpoints.largeUp} {
    min-width: 220px;
    margin: 0 20px 20px 0;
    width: inherit;
  }
  
  @media ${breakpoints.mediumUp} and ${breakpoints.mediumBelow} {
    flex: 0 calc(50% - 10px);
    
    &:nth-child(odd) {
      margin-right: 20px;
    }
  }
  
  &:hover {
    ${boxShadow('0px', '0px', '7px', '3px', `33, 33, 33`, '0.1')};
  }
  
  .is-visible-lg {
    @media ${breakpoints.xlargeUp} {
      visibility: hidden
    }
  }
  
  .hidden-node {
    display: none;
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
      max-width: 450px;  
    }
    
    input[type="text"] {
      text-align: left;
    }
    
    img {
      max-width: 100%;
    }
  }
  
  &.new-user-form {
    &.float-card {
      @media ${breakpoints.xlargeUp} {
        width: 600px;
        position: fixed;
        left: 50%;
        top: 15%;
        transform: translateX(-50%);
        padding: 20px 40px;
        }
      }
  }
  
  .edit-button {
    padding: 10px 5px 0;
    display: inline-block;
  }
  
  .plus-icon {
    width: 110px;
    margin-bottom: 15px;
  }
  
  &.card-new {
    ${flexbox};
    ${justifyContent('center')};
    ${alignItems('center')};
    ${flexDirection('column')};
    cursor: pointer;
    min-height: 350px;
    min-width: 290px;
  }
  
  .button-edit {
    border: 1px solid transparent;
    background: ${props => props.theme.colors.highlight};
    color: ${props => props.theme.colors.white};
    padding: 10px 15px;
    cursor: pointer;
    
    &:active, &:focus {
      border: 1px solid transparent;
      outline: none;
    }
  }
`;

export const UserDescriptionWrapperStyle = styled.div`
  padding: 20px 0 10px 0;  
`;

export const ButtonWrapper = styled.div`
  ${flexbox};
  margin-top: 25px;
  
  input {
    ${flex(1)};
    text-align: center; 
    
    &:nth-child(odd) {
      margin-right: 10px;
    }
  }
`;

export const Header = styled.h2`
  color: ${props => props.theme.colors.black }
`

export const H1 = styled.h1`
  color: ${props => props.theme.colors.highlight}
`;
