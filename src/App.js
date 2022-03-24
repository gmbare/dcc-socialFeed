import { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost.jsx';
// import './App.css';


function App() {

  function nameReturn(entryReturnName){
    setName(entryReturnName)
  }
  function postReturn(entryReturnPost){
    setsocialPost([...socialPost, entryReturnPost])
    // setPost(entryReturnPost)
  }

  const [socialPost, setsocialPost] = useState([{name: 'Felicity',post:'The day is wonderful and my night is ruined', liked:0}])
  const [name,setName] = useState('Felicia')
  const [post,setPost] = useState('The day is wonderful and my night is ruined.')


  return (
    <div>
      <div>
        <CreatePost postReturn={postReturn}/>
        <label>{socialPost[0].name}<br/>{socialPost[0].post}</label>
      </div>
    </div>
  );
}

export default App;
