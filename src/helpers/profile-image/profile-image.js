import { FallBackProfileImage, Initials, ProfileImageStyle } from "./profile-image-style";

/**
 * if profile image not found, display initials as the profile pictures
 *
 * @param image
 * @returns {JSX.Element}
 */
export const handleProfileImage = ( user ) => {
  return (
    (user.profileImageUrl) ? <ProfileImage user={ user }/> : <FallBackImage fullname={ user.name }  />
  );
};

/**
 * get initials of full name
 *
 * @param string
 * @returns {string}
 */
const getInitials = ( fullname )=> {
  var names = fullname.split(' '),
    initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};

/**
 * fall back image user interface
 * get initials if image not found
 *
 * @returns {JSX.Element}
 * @constructor
 */
const FallBackImage = ({ fullname }) => {
  return (
    <FallBackProfileImage>
      <Initials>{ getInitials(fullname) }</Initials>
    </FallBackProfileImage>
  )
}

/**
 * get the image attribute if image is found
 *
 * @param user
 * @returns {JSX.Element}
 * @constructor
 */
const ProfileImage = ({ user })=> {
  let imagePath = `/${user.profileImageUrl}`;

  return <ProfileImageStyle src={imagePath} alt={user.name} ></ProfileImageStyle>
}