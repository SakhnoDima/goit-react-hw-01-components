import { StatisticsItem } from "./FriendsItem";
import PropTypes from 'prop-types';


export const FriendList = ({ items = [] }) => {
return <ul className="friend-list">
 {items.map((item => (
    
    <StatisticsItem
    key={item.id}
    isOnline={item.isOnline}
    name={item.name}
    avatar={item.avatar}/>
     
 )))}
</ul>
}

FriendList.propTypes ={
    item : PropTypes.arrayOf(PropTypes.shape({
      id : PropTypes.number.isRequired,
    }))
   
}