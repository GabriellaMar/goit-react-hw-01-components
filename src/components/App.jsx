import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'
import { FriendList } from './friendListComponent/friendsList';
import { Statistics } from './statisticsComponent/statistics';
import { UserProfile } from './userComponent/userProfile';
import { TransactionHistory } from './transactionHistoryComponent/transactionHistory'

export const App = () => {
  return (
    <>
      <UserProfile
        userAvatar={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
