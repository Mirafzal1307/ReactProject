
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './containers/HomePage';
import ProductListPage from './containers/PoductListPage';







function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact  path="/"   element={<HomePage/>}/>
          <Route path="/:slug"  element={<ProductListPage/>}/>
        </Routes>
      </Router>
      

    



    </div>
  );
}

export default App;
