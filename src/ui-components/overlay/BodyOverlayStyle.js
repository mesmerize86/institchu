import styled from 'styled-components';

export const BodyOverlayStyle = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 1;
   display: none;
   background: #000;
   opacity: 0.8;
   
   &.modal-is-open {
    display: block;
   }
 `;