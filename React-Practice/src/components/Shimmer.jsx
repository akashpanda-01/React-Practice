const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-image"></div>

            <div className="shimmer-line title"></div>

            <div className="shimmer-line short"></div>

            <div className="shimmer-line"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;