import React, { useState } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import SearchForm from './Components/SearchForm/SearchForm';
import SearchResults from './Components/SearchResults/SearchResults';
import ArticleDetails from './Components/ArticleDetails/ArticleDetails';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<>
            <SearchForm setArticles={setArticles}/>
            <SearchResults articles={articles}/>
            </>
          } />
          <Route path="/article/:id" element={<ArticleDetails articles={articles}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
