import React from "react";
import Article from "./Article";

function ArticleList({ posts, onArticleClick }) {
  return (
    <main>
      {posts.map((post) => (
        <Article 
          key={post.id} 
          {...post} 
          onClick={() => onArticleClick(post)} 
        />
      ))}
    </main>
  );
}

export default ArticleList;
