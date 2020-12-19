import styled from 'styled-components';
import { flexbox, justifyContent, alignItems } from "../../styles/mixins/flexbox";

export const FallBackProfileImage = styled.div`
  background: ${ props => props.theme.colors.body };
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: 0 auto;
  ${flexbox};
  ${justifyContent('center')};
  ${alignItems('center')};
`;

export const Initials = styled.p`
    font-size: 40px;
    color: ${ props => props.theme.colors.highlight }
`;

export const ProfileImageStyle = styled.img`
  max-width: 250px;
`;

