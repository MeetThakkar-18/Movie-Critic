import Link from 'next/link';

const MovieList = () => {
  return (
    <Link href="/movies/1">
      <div className="bg-blue-200 p-4 rounded-md shadow-md cursor-pointer block">
        <h3 className="text-lg  mb-2 ">Movie Name</h3>
        <p className="text-sm mb-2">Released: January 1, 2023</p>
        <p className="text-sm font-semibold">Rating: 9/10</p>
      </div>
    </Link>
  );
};

export default MovieList;
