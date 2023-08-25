import { ThemeProvider } from '@emotion/react';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from './Profile/user.json';
import items from './Statistics/data 2.json';
import friends from './FriendList/friends.json';
import transaction from './TransactionHistory/transactions.json';
import { Counter } from './Counter/Counter.jsx';
import { Toggle } from './Counter/Show-Hide';

const theme = {
  colors: {
    primary: 'lightgray',
  },
  shadow: {
    primary: '0px 1px 6px 4px grey',
  },
};

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Toggle>
        <Counter initialValue={10} step={5} />
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <br />
        <Statistics title={'Upload stats'} items={items} />
        <br />
        <FriendList items={friends} />
        <br />
        <TransactionHistory items={transaction} />
      </Toggle>
    </ThemeProvider>
  );
};
