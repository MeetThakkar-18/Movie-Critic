import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center shadow-lg p-6 rounded-lg bg-white-600 mb-6">
        <h4 className="text-2xl text-blue-500">MOVIE CRITIC</h4>
        <div className="flex space-x-4">
          <Link href="/add-movie">
            <div className="text-blue-500 border border-blue-300 bg-white px-4 py-2 rounded hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700">
              Add new movie
            </div>
          </Link>
          <Link href="/add-review">
            <div className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Add new review
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
