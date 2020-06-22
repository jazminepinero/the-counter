/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from 'react';
import './App.css';
import Dashboard from './Dashboard'
import HomePage from './HomePage';
import firebase from "./firebase"

function App() {
  useEffect(() => {
    document.title = "Counter - The Accounting Trial Balance Software"
  });
  if (!firebase.getCurrentUsername()) {
    // not logged in
    return <HomePage />;
  }
  return <Dashboard />;
  } 





export default App;
