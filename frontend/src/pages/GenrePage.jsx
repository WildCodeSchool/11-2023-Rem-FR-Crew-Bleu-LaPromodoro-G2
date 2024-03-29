// GenrePage.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import GenreFilter from "../components/GenreFilter";
import "../styles/GenrePage.css";

function GenrePage({ filmType, onGenreChange, onPageChange }) {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleGenreChange = (genres) => {
    setSelectedGenres(genres);
    onGenreChange(genres);
  };

  const handleSearch = async () => {
    const baseURL = "https://api.themoviedb.org/3";
    const language = "fr-FR";

    const authToken =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDA5OWZiMmIwZjMxNGY5YmIzMjJjNzY2MGExMWVmNSIsInN1YiI6IjY1OTg0OTc3MWQxYmY0MDFhOGU0YmViMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Qtip1eiVi7XgfcZBaGDsa5LzjXMd4Ym3Ems_tmCiTQ";

    try {
      const url = `${baseURL}/discover/${
        filmType === "movie" ? "movie" : "tv"
      }?language=${language}&with_genres=${selectedGenres.join("%2C")}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: authToken,
        },
      });
      const data = await response.json();

      setSearchResults(data.results);
      console.info(url);
      console.info(data.results);

      navigate(`/filter/gallery/${filmType}/${selectedGenres}`);
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
  };

  return (
    searchResults && (
      <div className="GenrePage">
        <GenreFilter filmType={filmType} onGenresChange={handleGenreChange} />
        <div className="GenrePageNav">
          <div
            onClick={() => onPageChange(1)}
            role="button"
            tabIndex={[0]}
            type="submit"
          >
            &#60;
          </div>
          <div
            onClick={handleSearch}
            role="button"
            tabIndex={[0]}
            type="submit"
          >
            ⌕
          </div>
        </div>
      </div>
    )
  );
}

GenrePage.propTypes = {
  filmType: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default GenrePage;
