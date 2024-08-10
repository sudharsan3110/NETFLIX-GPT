import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageconstant";
import { useRef } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { MOVIE_LIST, NETFLIX_API } from "../utils/constants.js";
import { addMovieResult } from "../utils/GptSlice.js";

const Gptsearchbar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const handlegptclick = async () => {
    console.log(searchText.current.value);
    const gensearchtext = searchText.current.value;
    const genAI = new GoogleGenerativeAI(NETFLIX_API);
    const seachTmdbdata = async (movie) => {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        MOVIE_LIST
      );
      const json = await data.json();
      return json.results;
    };
    const searchResults = async () => {
      try {
        const model = genAI.getGenerativeModel({
          model: "gemini-pro",
          body: JSON.stringify({}),
        });

        const query =
          "Act as a Movie Recommendation system and suggest some movies for the query : " +
          gensearchtext +
          ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
        const result = await model.generateContent(query);
        const movie = result?.response?.candidates[0].content.parts[0].text;
        const mvearr = movie.split(", ");
        console.log(mvearr);
        const promisearray = mvearr.map((movie) => seachTmdbdata(movie));
        const prresol = await Promise.all(promisearray);
        console.log(prresol);
        dispatch(addMovieResult({ movieName: mvearr, movieResult: prresol }));
      } catch (err) {
        console.log(err);
      }
    };
    searchResults();
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchText}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handlegptclick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default Gptsearchbar;
