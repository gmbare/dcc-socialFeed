import React, { useState } from 'react';
import './LikeDislike.css'
import thumb from './thumbs-up.png'


const LikeDislike = (props) => {
    let index = props.index
    return (
    <div className='unselectable'>
        <input type='radio' id={`${index}null`} value="0" className="null" name={`${index}Liked`}></input>
        <input type='radio' id={`${index}liked`} value="1" className="liked" name={`${index}Liked`}></input>
        <label htmlFor={`${index}liked`} className="likedlabel roundcorner">/\<label htmlFor={`${index}null`} className="nulllabel roundcorner">/\</label></label>
        <input type='radio' id={`${index}disliked`} value="-1" className="disliked" name={`${index}Liked`}></input>
        <label htmlFor={`${index}disliked`} className="dislikedlabel roundcorner">\/<label htmlFor={`${index}null`} className="nulllabel roundcorner">\/</label></label>
        </div>
     );
}
 
export default LikeDislike;