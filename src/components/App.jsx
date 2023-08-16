import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics"
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import  user  from "./Profile/user.json";
import  items  from "./Statistics/data 2.json";
import  friends  from "./FriendList/friends.json";
import  transaction from "./TransactionHistory/transactions.json";

export const App = () => {
  return (
    <>
     <Profile 
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats} />
     <br/>
    <Statistics title={'Upload stats'} items={items} />
    <br/>
    <FriendList items={friends}/>
    <br/>
    <TransactionHistory items={transaction} />
    </>

  );
};
