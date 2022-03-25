import React, { useState } from 'react';
import './CreatePost.css'

const CreatePost = (props) => {

    function handleSubmit(event){
        event.preventDefault();
        props.postReturn({name:event.target.nameEntry.value, post:event.target.postEntry.value, liked:0, date: (Date().substring(0,28))})
        event.target.nameEntry.value = ''
        // props.postReturn(event.target.postEntry.value)
        event.target.postEntry.value = ''
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group entry'>
                <label for='nameEntry' >Name: <br/><input  type="text" id='nameEntry'/></label>
                <br />
                <label>Post: <br/><input type="text"   id='postEntry' /></label>
            </div>
            <div className='entry'><button type="submit">Submit</button></div>
        </form>
    );
}

export default CreatePost;