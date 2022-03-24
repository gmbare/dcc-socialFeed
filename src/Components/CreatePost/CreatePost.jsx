import React, { useState } from 'react';


const CreatePost = (props) => {

    function handleSubmit(event){
        event.preventDefault();
        props.postReturn({name:event.target.nameEntry.value, post:event.target.postEntry.value, liked:0})
        event.target.nameEntry.value = ''
        // props.postReturn(event.target.postEntry.value)
        event.target.postEntry.value = ''
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Name: </label><input type="text" id='nameEntry'/>
                <br />
                <label>Post: </label><input type="text" id='postEntry' />
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default CreatePost;