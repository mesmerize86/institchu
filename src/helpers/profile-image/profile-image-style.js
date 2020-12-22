import styled from 'styled-components';

export const FallBackProfileImage = styled.div`
  background: ${ props => props.theme.colors.body };
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: 0 auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Initials = styled.p`
    font-size: 40px;
    color: ${ props => props.theme.colors.highlight }
`;

export const ProfileImageStyle = styled.img`
  max-width: 250px;
  margin-bottom: 20px;
`;

