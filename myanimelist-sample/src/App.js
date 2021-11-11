// import React, { useState, useEffect, useCallback } from 'react'
import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import AnimePage from './pages/AnimePage';
import HomePage from './pages/HomePage';
import AnimeDetail from './pages/AnimeDetail';

function App() {
  return (
    <div >

      <Header />
      {/* <HomePage /> */}
      <Switch>
        <Route path="/home" >
          <HomePage />
        </Route>
        <Route path="/anime">
          <AnimePage />
        </Route>
        <Route path="/anime">
          <AnimePage />
        </Route>
        <Route path="/anime-detail/:animeId">
            <AnimeDetail/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
