import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Signup from './containers/Home/Signup';
import Signin from './containers/Home/Signin';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home/>} />
        <Route path="signin" caseSensitive={false} element={<Signin />} />
        <Route path="signup" caseSensitive={false} element={<Signup />} />
      </Routes>
    </Router>
   );
}

export default App;
