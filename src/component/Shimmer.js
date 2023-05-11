const Shimmer = () => {
  return (
    <div className="shimmer-container">

      {Array(10)
        .fill("")
        .map(
          (e) =>
            (e = (
              <div>
                <div className="shimmer-card"></div>
                {Array(2)
                  .fill("")
                  .map((i) => (i = <div className="x-shimmer-card"></div>))}
              </div>
            ))
        )}
    </div>
  );
};

export default Shimmer;
