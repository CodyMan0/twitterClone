import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    const [nweet, setNweet] = useState('');
    const onSubmit = (e) => { 
      e.preventDefault();
    
      ;
    };
    const onChange = (e) => {
      setNweet(e.target.value)
    };
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/"></Link>Home</li>
          <li><Link to="/editprofile">EditProfile</Link></li>
        </ul>
      </nav>
      <form onSubmit={onSubmit}>
        <input value={nweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120}/>
        <button type='submit'>twet</button>
      </form>
    </div> 
  );
}

export default Home;