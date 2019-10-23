import React from 'react';
import Friend from "./Friend";
import Friends from "./Friends";
import friends from "../data/friends";

const App = () => <Friends>
    {friends.map(friend => <Friend name={friend.name} avatar={friend.avatar}/>)}
</Friends>;

export default App;
