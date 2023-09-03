//import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import CreatePost from './pages/CreatePost';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {routePath} from './routes/route';
//import CreatePost from './pages/CreatePost';
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home/>}/>
       <Route path={routePath.create}element={<CreatePost/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
