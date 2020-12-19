import styled from 'styled-components';

export const InputStyle = styled.input`
  padding: 10px;
  border: 1px solid ${ props => props.theme.colors.black };
  margin: 10px 0;
  display: block;
  text-align: center;
  font-size: ${ props => props.theme.fonts.bodySize };
  width: calc(100% - 20px);
  
  &:disabled {
   border: none;
   background: none;
   padding: 0;
   margin: 0;
   line-height: 1.5rem;
   width: 100%;
  }
 `;