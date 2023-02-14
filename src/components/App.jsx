import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
// import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import User from '../data/user.json';
import Stats from '../data/stats.json';
import friends from '../data/friends.json';
// import transaction from '../data/transaction';

export const App = () => {
  return (
    <div>
      <Profile {...User} />
      <Statistics stats={Stats} title="Upload stats" />
      <FriendList friends={friends} />;{/* <TransactionHistory />; */}
    </div>
  );
};
