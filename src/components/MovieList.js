import React from "react";
import { motion } from "framer-motion";

const childVariants = {
  hidden: {
    x: '-100vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 2}
  },
};

const MovieList = ({ movie }) => {
  return (
    <motion.li variants={childVariants}>
      <motion.div className="movie-wrapper">
        <img
          className="movie-cover"
          src="https://project-poke-server.herokuapp.com/static/masterball.png"
          alt="cover"
        />
        <span className="movie-title">
          {movie.id} {movie.title}
        </span>
      </motion.div>
    </motion.li>
  );
};

export default MovieList;
