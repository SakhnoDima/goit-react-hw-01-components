import PropTypes from 'prop-types';
import { ProfileBox, UserAvatar, UserName, UserTag, UserLocation, Stats, ListItem, Label, Quantity } from "./Profile.styled";

export const Profile = ({avatar, username, tag, location,stats}) =>{
return <ProfileBox className="profile">
  <div className="description">
    <UserAvatar
      src={avatar}
      alt="User avatar"
    />
    <UserName>{username}</UserName>
    <UserTag>@{tag}</UserTag>
    <UserLocation>{location}</UserLocation>
  </div>
  <Stats>
    <ListItem>
      <Label>Followers</Label> <br />
      <Quantity> {stats.followers}</Quantity>
    </ListItem>
    <ListItem>
      <Label>Views</Label> <br />
      <Quantity> {stats.views}</Quantity>
    </ListItem>
    <ListItem>
      <Label>Likes</Label> <br />
      <Quantity> {stats.likes}</Quantity>
    </ListItem>
  </Stats>
</ProfileBox>
}

Profile.propTypes = {
  avatar : PropTypes.string,
  username : PropTypes.string,
  tag : PropTypes.string,
  location : PropTypes.string,
  stats : PropTypes.shape({
    requiredProperty: PropTypes.number
})
 }