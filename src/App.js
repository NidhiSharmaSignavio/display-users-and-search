import './App.css';
import Home from './components/Home';
import UserProvider from './context_store/UserProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <UserProvider>
      <div className='App'>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/users/:id' element={<UserProfile />}></Route>
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
