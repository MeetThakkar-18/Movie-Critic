const MovieReviewList = () => {
    const reviews = [
      { description: 'Great movie!', name: 'meet', rating: '9/10' },
      { description: 'Amazing story.', name: 'meet', rating: '8/10' },
      { description: 'Could be better.', name: 'meet', rating: '7/10' },
    ];
  
    return (
      <div>
        {reviews.map((review, index) => (
          <div key={index} className="border-2 border-gray-300 rounded p-4 mb-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-lg mb-2">{review.description}</p>
                <p className="text-gray-700 italic">By {review.name}</p>
              </div>
              <p className="text-blue-700">{review.rating}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default MovieReviewList;
  