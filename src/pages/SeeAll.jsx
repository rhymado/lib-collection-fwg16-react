import { useSearchParams } from "react-router-dom";

const GenreCheckbox = ({ genre, onChangeHandler, checked }) => (
  <li>
    <input
      type="checkbox"
      id={genre}
      name={genre}
      className="mr-2 cursor-pointer select-none"
      onChange={onChangeHandler}
      defaultChecked={checked}
    />
    <label htmlFor={genre} className="cursor-pointer select-none">
      {genre}
    </label>
  </li>
);

const SortOptions = ({ sort }) => <option value={sort}>{sort}</option>;

function SeeAll() {
  const [searchParams, setSearchParams] = useSearchParams();
  const genreList = ["Romance", "Adventure", "Action", "Drama"];
  const sortList = ["latest", "popular"];
  const searchHandler = (e) => {
    e.preventDefault();
    setSearchParams((prev) => {
      const prevSearchParams = {};
      prev.forEach((value, key) => {
        Object.assign(prevSearchParams, { [key]: value });
      });
      return {
        ...prevSearchParams,
        search: e.target.search.value,
      };
    });
  };
  const genreHandler = (e) => {
    const prevGenre = searchParams.get("genre");
    const prevGenreArr = prevGenre ? prevGenre.split(",") : [];
    const filterResult = prevGenreArr.filter((genre) => genre !== e.target.name.toLowerCase());

    const newGenreArr =
      filterResult.length < prevGenreArr.length ? filterResult : [...prevGenreArr, e.target.name];

    setSearchParams((prev) => {
      const prevSearchParams = {};
      prev.forEach((value, key) => {
        Object.assign(prevSearchParams, { [key]: value });
      });
      return {
        ...prevSearchParams,
        genre: newGenreArr.join(",").toLowerCase(),
      };
    });
  };
  const sortHandler = (e) => {
    setSearchParams((prev) => {
      const prevSearchParams = {};
      prev.forEach((value, key) => {
        Object.assign(prevSearchParams, { [key]: value });
      });
      return {
        ...prevSearchParams,
        sort: e.target.value,
      };
    });
  };
  const isGenreChecked = (genre) => {
    const prevGenre = searchParams.get("genre");
    if (!prevGenre) return false;
    if (prevGenre.split(",").includes(genre.toLowerCase())) return true;
    return false;
  };
  return (
    <main className="bg-slate-500 p-3 h-full text-white">
      <div className="bg-white rounded-lg my-3">
        <form onSubmit={searchHandler} className="w-full flex">
          <input
            type="text"
            name="search"
            className="p-3 text-black outline-none bg-transparent flex-1 focus:outline-none rounded-l-lg"
            defaultValue={searchParams.get("search")}
          />
          <button type="submit" className="p-2 bg-black rounded-r-lg">
            Search
          </button>
        </form>
      </div>
      <aside className="flex justify-between">
        <div className="text-left">
          <h2>Genre</h2>
          <ol>
            {genreList.map((genre, idx) => {
              return (
                <GenreCheckbox
                  key={idx}
                  genre={genre}
                  onChangeHandler={genreHandler}
                  checked={isGenreChecked(genre)}
                />
              );
            })}
          </ol>
        </div>
        <div className="text-right">
          <h2>Sort</h2>
          <select
            className="text-black"
            onChange={sortHandler}
            defaultValue={searchParams.get("sort") || ""}
          >
            <option value="" disabled></option>
            {sortList.map((sort, idx) => (
              <SortOptions key={idx} sort={sort} />
            ))}
          </select>
        </div>
      </aside>
    </main>
  );
}

export default SeeAll;
