import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeBanner from './components/HomeBanner';
import Banner from './components/banner';
import Login from './components/login';
import List from './components/list';
function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<React.Fragment> <Header /> <HomeBanner /> </React.Fragment>} />
          <Route path="/login" element={<React.Fragment> <Login /> </React.Fragment>} />
          <Route path="/Dashboard" element={<React.Fragment> <Header /> <Banner />  <List />   </React.Fragment>} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
