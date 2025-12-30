import { useEffect, useState } from "react";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>BeyondChats Articles</h1>

      {articles.length === 0 && <p>No articles found</p>}

      {articles.map((article) => (
        <div
          key={article.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px",
          }}
        >
          <h2>{article.title}</h2>
          <p>{article.content}</p>

          {article.references && (
            <small>
              <b>References:</b> {article.references}
            </small>
          )}
        </div>
      ))}
    </div>
  );
}

export default Articles;