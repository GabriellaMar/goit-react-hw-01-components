import React from 'react';
import ReactDOM from 'react-dom/client';
// import user from './data/user.json'
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //  <UserProfile 
  // userAvatar={user.avatar} 
  // name={user.name}
  // tag = {user.tag}
  // location ={user.location}
  // followers ={user.stats.followers}
  // views ={user.stats.views}
  // likes ={user.stats.likes}
  //  />
   <React.StrictMode>
     <App />
   </React.StrictMode>
);
