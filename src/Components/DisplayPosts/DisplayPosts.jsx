import React, { Component } from 'react';
import './DisplayPosts.css';
import LikeDislike from './Components/LikeDislike/LikeDislike.jsx';




const DisplayPosts = (props) => {

    return (
        <div className='postbox'>
            {props.socialPost.map((entry, index) => {
                return(
                    <div key={index}>
                        <span className='name'>
                        {entry.name}</span>
                        <span className='post'><br/>
                        {entry.post}</span>
                    <LikeDislike index={index}/>
                    </div>
                );
                <input type='checkbox'>like</input>
            })}
        </div>
     );
};
 
export default DisplayPosts;