import Header from "@/app/components/Header";
import MovieReviewList from "../../components/MovieReviewList";
import Footer from "@/app/components/Footer";

const MovieDetailPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl text-gray-700 mb-4">Movie Title</h2>
          <p className="text-3xl text-blue-700 mb-4"> 9/10</p>
        </div>

        <MovieReviewList />
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetailPage;
