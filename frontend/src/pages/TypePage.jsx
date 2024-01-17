import React from "react";
import PropTypes from "prop-types";
import TypeFilter from "../components/TypeFilter";

function TypePage({ onFilmTypeChange }) {
  return (
    <div>
      <h1>Page de choix entre Film et Série</h1>
      <TypeFilter onFilmTypeChange={onFilmTypeChange} />
    </div>
  );
}

TypePage.propTypes = {
  onFilmTypeChange: PropTypes.func.isRequired,
};

export default TypePage;
