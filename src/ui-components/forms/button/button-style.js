import styled from 'styled-components';

const ButtonStyle = styled.input`
  padding: 10px;
  cursor:  pointer;
  font-size: ${ props => props.theme.fonts.sizex };
  border: 1px solid ${ props => props.theme.colors.black };
  
  &:hover {
    border-color: transaparent;
    background-color: ${ props => props.theme.colors.highlight_light };
    color: ${ props => props.theme.colors.white };
  }
  
  &:focus, &:active , &:visited {
    outline: none;
  }
`;

export default ButtonStyle;