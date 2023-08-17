import PropTypes from 'prop-types';

import { StatisticsItem } from './FriendsItem';
import { FriendItems } from './Friends.styled';

export const FriendList = ({ items = [] }) => {
  return (
    <FriendItems>
      {items.map(item => (
        <StatisticsItem
          key={item.id}
          isOnline={item.isOnline}
          name={item.name}
          avatar={item.avatar}
        />
      ))}
    </FriendItems>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
