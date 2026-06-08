import "./Shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img shimmer"></div>

            <div className="shimmer-title shimmer"></div>

            <div className="shimmer-cuisine shimmer"></div>

            <div className="shimmer-rating shimmer"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;