import styled from 'styled-components';
import {flexbox, justifyContent, alignItems} from "../../styles/mixins/flexbox";

const LoadingStyle = styled.div`
  ${flexbox};
  ${justifyContent('center')};
  ${alignItems('center')};
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.8);
  
  .loading {
      width: 80px;
      height: 50px;
      position: relative;
      top: -30px;
      left: -20px;

      p {
         top: 0;
         padding: 0;
         margin: 0;
         color: #5389a6;
         font-family: 'Montserrat';
         animation: text 3.5s ease both infinite;
         font-size: 12px;
         letter-spacing: 1px;

         @keyframes text {
            0% {
               letter-spacing: 1px;
               transform: translateX(0px);
            }

            40% {
               letter-spacing: 2px;
               transform: translateX(26px);
            }

            80% {
               letter-spacing: 1px;
               transform: translateX(32px);
            }

            90% {
               letter-spacing: 2px;
               transform: translateX(0px);
            }

            100% {
               letter-spacing: 1px;
               transform: translateX(0px);
            }
         }
      }
      span {
         background-color: #5389a6;
         border-radius: 50px;
         display: block;
         height: 16px;
         width: 16px;
         bottom: 0;
         position: absolute;
         transform: translateX(64px);
         animation: loading 3.5s ease both infinite;

         &:before {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            background-color: #a6dcee;
            border-radius: inherit;
            animation: loading2 3.5s ease both infinite;
         }

         @keyframes loading {
            0% {
               width: 16px;
               transform: translateX(0px);
            }

            40% {
               width: 100%;
               transform: translateX(0px);
            }

            80% {
               width: 16px;
               transform: translateX(64px);
            } 

            90% {
               width: 100%;
               transform: translateX(0px);
            }

            100% {
               width: 16px;
               transform: translateX(0px);
            }
         }
         @keyframes loading2 {
            0% {
               transform: translateX(0px);
               width: 16px;
            }

            40% {
               transform: translateX(0%);
               width: 80%;
            }

           80% {
               width: 100%;
               transform: translateX(0px);
            }

            90% {
               width: 80%;
            transform: translateX(15px);
            }
            100% {
               transform: translateX(0px);
               width: 16px;
            }
         }
      }
   }
`;

export default LoadingStyle