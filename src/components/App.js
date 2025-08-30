import React, { useState } from "react";
import "../App.css";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";
import blogData from "../data/blog";

function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleBackClick = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="App">
      <Header name="My Personal Blog" />
      <About 
        about="Welcome to my personal blog! Here I share thoughts, tutorials, and stories about coding and life."
      />
      
      {selectedArticle ? (
        <Article {...selectedArticle} showBackButton={true} onBack={handleBackClick} />
      ) : (
        <ArticleList posts={blogData} onArticleClick={handleArticleClick} />
      )}
    </div>
  );
}

export default App;
