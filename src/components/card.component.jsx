const Card = ({ newQuote, quote }) => {
  //
  const { text, author } = quote;
  //
  const tweet = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text} - ${author}`;
    window.open(twitterUrl, "_blank");
  };
  //
  return (
    <div className="card">
      <div className="card-info">
        <h2>{text}</h2>
        <p>{author ? author : "Unknown"}</p>
      </div>
      <div className="card-buttons">
        <button type="button" className="button quote" onClick={newQuote}>
          New Quote
        </button>
        <button className="button tweet" onClick={tweet}>
          Tweet this
        </button>
      </div>
    </div>
  );
};

export default Card;
