import PropTypes from 'prop-types';

export const StatisticsItem = ({ avatar, name, isOnline }) => {
    return <li className="item" >
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
    </li>
  }

StatisticsItem.propTypes={
    name : PropTypes.string.isRequired,
    avatar : PropTypes.string.isRequired,
    isOnline : PropTypes.bool.isRequired
}