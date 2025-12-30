import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://beyondchats-backend-2.onrender.com/articles")
      .then((res) => setArticles(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ background: "#f8f9fa", minHeight: "100vh" }}>
      <div className="container py-4">
        <h2 className="text-center mb-4 fw-bold">
          BeyondChats Articles
        </h2>

        {articles.map((article) => (
          <div key={article.id} className="card mb-4 border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="mb-0">{article.title}</h5>
                <span
                  className={`badge ${
                    article.status === "updated"
                      ? "bg-success"
                      : "bg-secondary"
                  }`}
                >
                  {article.status}
                </span>
              </div>

              <p
                className="text-muted mt-3"
                style={{ whiteSpace: "pre-line" }}
              >
                {article.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;