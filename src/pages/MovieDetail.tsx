import React, { useState } from "react";
import PropTypes from "prop-types";
import { Header } from "../components/Header";
import Spinner from "../components/Spinner";

function MovieDetail(props) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <Header />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div>MovieDetail</div>;
        </>
      )}
    </>
  );
}

MovieDetail.propTypes = {};

export default MovieDetail;
