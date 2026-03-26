import { useEffect, useState } from "react";
import "./Loading.css";

function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <div className="loading-logo">
          <div className="loading-circle"></div>
          <div className="loading-text">
            <span>J</span>
            <span>B</span>
          </div>
        </div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <p className="loading-subtitle">Loading Experience...</p>
      </div>
    </div>
  );
}

export default Loading;
