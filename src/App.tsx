import './App.css';
import Login from './login';
import Home from './home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const goToContent = () => {
  Navigate("Content" as never);
};


function App() {
  return (


    <div className="App">
      <div>
        <Router>
          <Routes>
            <Route path="/login" Component={Login} />
            <Route path="/home" Component={Home} />
          </Routes>
        </Router>
      </div >

    </div>


  );
}

export default App;
