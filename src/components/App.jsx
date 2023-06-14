import user from '../data/user.json';
  import data from '../data/data.json';
  import friends from '../data/friends.json'
  import { FriendList } from './friendListComponent/friendsList';
  import { FriendListItem } from "components/friendComponent/friendListItem"
import { Statistics } from './statisticsComponent/statistics';
import { UserProfile } from './userComponent/userProfile';

  export const App = () => {
   return (
    <>
    <UserProfile 
    userAvatar={user.avatar} 
    name={user.username}
    tag = {user.tag}
    location ={user.location}
    followers ={user.stats.followers}
    views ={user.stats.views}
    likes ={user.stats.likes}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends ={friends}/>
    </>
   ); };
// export const UserProfile = ({name, tag, location, userAvatar, followers, views, likes}) => {
//   return (
// <div class="profile">
// <div class="description">
//   <img
//     src= {userAvatar}
//     alt="User avatar"
//     class="avatar"
//   />
//   <p class="name">{name}</p>
//   <p class="tag">{tag}</p>
//   <p class="location">{location}</p>
// </div>

// <ul class="stats">
//   <li>
//     <span class="label">Followers </span>
//     <span class="quantity">{followers}</span>
//   </li>
//   <li>
//     <span class="label">Views </span>
//     <span class="quantity">{views}</span>
//   </li>
//   <li>
//     <span class="label">Likes </span>
//     <span class="quantity">{likes}</span>
//   </li>
// </ul>
// </div>)
// }
// const UserProfile = () => {
//   return (

//   )
// }