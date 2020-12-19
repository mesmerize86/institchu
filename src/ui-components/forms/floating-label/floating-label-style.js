import styled from 'styled-components';
import { transform } from "../../../styles/mixins/transform";

export const FloatingLabelStyle = styled.div`
   margin-bottom: 15px;

        input[type="text"],
        input[type="password"],
        input[type="email"],
        input[type="number"],
        input[type="tel"] {
            padding: 8px 14px;
            border: 1px solid ${props => props.theme.colors.black};
            min-height: 22px;
            font-size: ${props => props.theme.fonts.bodySize};
            font-family: 'Montserrat';

            & + label {
                cursor: text;
                display: block;
                height: 0;
                margin-left: 0;
                pointer-events: none;
                position: relative;
                text-align: left;
                top: -31px;
                left: 15px;
                width: 100%;

                .floating-label-text {
                    display: inline-block;
                    transition: all 0.3s ease-in-out;
                }
            }

            //focus state
            &:focus {
                outline: none;
                border-color: ${props => props.theme.colors.highlight};

                + label .floating-label-text {
                    color:  ${props => props.theme.colors.highlight};
                    font-size: ${props => props.theme.fonts.bodySize};
                    background: ${props => props.theme.colors.white};
                    ${transform('translateY(-19px)')};

                }
            }

            /* when input has some text */
            &.input-has-content {
                + label .floating-label-text {
                    color: ${props => props.theme.colors.highlight};
                    font-size:${props => props.theme.fonts.bodySize};
                    background:  ${props => props.theme.colors.white};
                    ${transform('translateY(-19px)')};
                }
            }

        }
 `;