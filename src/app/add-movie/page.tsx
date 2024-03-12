const MovieForm = () => {
  const handleCreateMovie = () => {
    console.log("Creating a new movie...");
  };

  return (
    <div
      style={{ width: "20%" }}
      className="flex flex-col border border-gray-300 p-5 m-5 bg-white shadow-md"
    >
      <div className="ml-2 mb-2 font-bold">Add New Movie</div>
      <div className="flex p-2">
        <input
          id="movieName"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:border-gray-500"
          type="text"
          placeholder="Enter movie name"
        />
      </div>
      <div className="flex p-2">
        <input
          id="releaseDate"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:border-gray-500"
          type="text"
          placeholder="Enter release date"
        />
      </div>
      <div className="flex justify-end items-center p-2">
        <button
          type="submit"
          className="border border-gray-300 p-2 bg-indigo-600 rounded text-white"
          // onClick={handleCreateMovie}
        >
          Create Movie
        </button>
      </div>
    </div>
  );
};
export default MovieForm;
