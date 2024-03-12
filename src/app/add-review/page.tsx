const ReviewForm = () => {
    const handleCreateReview = () => {
      console.log("Creating a new review...");
    };
  
    return (
      <div
        style={{ width: "20%" }}
        className="flex flex-col border justify-center border-gray-300 p-5 m-5 bg-white shadow-md"
      >
        <div className="ml-2 mb-2 font-bold">Add New Review</div>
        
        <div className="flex p-2">
          <select
            id="movieSelect"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:border-gray-500 w-full"
          >
            <option value="movie1">Movie 1</option>
            <option value="movie2">Movie 2</option>
            <option value="movie3">Movie 3</option>
          </select>
        </div>
  
        <div className="flex p-2">
          <input
            id="Name"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:border-gray-500 w-full"
            type="text"
            placeholder="Your Name"
          />
        </div>
  
        <div className="flex p-2">
          <input
            id="rating"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:border-gray-500 w-full"
            type="text"
            placeholder="Rating out of 10"
          />
        </div>
  
        <div className="flex p-2">
          <textarea
            id="review"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:border-gray-500 w-full"
            placeholder="Review Comments"
          />
        </div>
  
        <div className="flex justify-end items-center p-2">
          <button
            type="submit"
            className="border border-gray-300 p-2 bg-indigo-600 rounded text-white"
            // onClick={handleCreateReview}
          >
            Add review
          </button>
        </div>
      </div>
    );
  };
  
  export default ReviewForm;
  