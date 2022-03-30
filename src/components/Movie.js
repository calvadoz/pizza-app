import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MovieList from "./MovieList";
import Spinner from "./Spinner";

const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = async () => {
    setIsLoading(true);
    const movieReq = await fetch(
      "https://project-javadoz.herokuapp.com/api/roll-movies"
    );
    const result = await movieReq.json();
    setMovies(result);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {isLoading && <Spinner />}
      {!isLoading && movies.length > 0 && (
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {movies.map((movie) => (
            <MovieList key={movie.id} movie={movie} />
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default Movie;
