import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import User from './data/user.json';
import Stats from './data/stats.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile {...User} />
      <Statistics stats={Stats} title="Upload stats" />
      <Statistics stats={Stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
