import React from "react";

function Article({ title, date = "January 1, 1970", preview, content, minutes, showBackButton, onBack, onClick }) {

  const renderReadingTime = (minutes) => {
    if (!minutes) return "";
    let emoji = "";
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      emoji = "☕️".repeat(cups);
    } else {
      const boxes = Math.ceil(minutes / 10);
      emoji = "🍱".repeat(boxes);
    }
    return `${emoji} ${minutes} min read`;
  };

  return (
    <article 
      style={{ cursor: onClick ? "pointer" : "default", marginBottom: "20px", border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }} 
      onClick={onClick}
    >
      {showBackButton && (
        <button 
          onClick={(e) => { e.stopPropagation(); onBack(); }} 
          style={{ marginBottom: "20px", cursor: "pointer", padding: "5px 10px", borderRadius: "5px" }}
        >
          ← Back
        </button>
      )}
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      {minutes && <p>{renderReadingTime(minutes)}</p>}

      {/* Render full article content if showBackButton is true */}
      {showBackButton && content && content.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
    </article>
  );
}

export default Article;
