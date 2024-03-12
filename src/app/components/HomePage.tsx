import Header from "./Header";
import MovieList from "./MovieList";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 p-8">
        <h2 className="text-4xl text-gray-700 mb-4">
          The best movie reviews site !
        </h2>
        <div className="mb-6 relative">
          <div
            style={{ width: "440px", height: "50px" }}
            className="flex items-center border border-blue-500 rounded"
          >
            <span className="text-blue-500 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                style={{ marginLeft: "5px" }}
                viewBox="0 0 50 50"
              >
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search for your favorite movies"
              className="w-full h-full focus:outline-none"
              style={{ backgroundColor: "transparent" }}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MovieList />
          <MovieList />
          <MovieList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
