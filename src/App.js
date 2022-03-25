import { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost.jsx';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts.jsx';
// import './App.css';


function App() {

  // function nameReturn(entryReturnName){
  //   setName(entryReturnName)
  // }
  function postReturn(entryReturnPost){
    setsocialPost([...socialPost, entryReturnPost])
    // setPost(entryReturnPost)
  }

  const [socialPost, setsocialPost] = useState([{name: 'Felicity',post:'The day is wonderful and my night is ruined', liked:0, date: (Date().substring(0,28))}])



  return (
    <div>
      <div>
        <CreatePost postReturn={postReturn}/>
        </div>
        <div>
          <DisplayPosts socialPost={socialPost} />
      </div>
    </div>
  );
}

export default App;
