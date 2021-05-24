import React, {useState, useEffect} from 'react';
import {Route} from "react-router-dom";
import axios from 'axios';
import Geo from "./map";

function App() {
  const[posts,setPosts] = useState([])
  useEffect(() => {
     axios.get('http://localhost:8000/geo')
     .then(res => setPosts(res.data))
     .catch(error => console.log(error));
  });
  return (
    <div>
      <Route to="/" render={()=> <Geo posts={posts}/> } /> 
    </div>
  )
}

export default App
