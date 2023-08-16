import PropTypes from 'prop-types';

export const Profile = ({avatar, username, tag, location,stats}) =>{
return <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats" style={{ display: 'flex', listStyle: 'none'}}>
    <li>
      <span className="label">Followers</span> <br />
      <span className="quantity"> {stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span> <br />
      <span className="quantity"> {stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span> <br />
      <span className="quantity"> {stats.likes}</span>
    </li>
  </ul>
</div>
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