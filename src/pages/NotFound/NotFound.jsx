import React from "react";
import error from "../../assets/images/404.png";
import "./_NotFound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound__container">
      <img alt="#" src={error} />
      <h3>Page Not Found</h3>
      <p>
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </p>
      <Link className="notfound__container_link" to="/">
        <button>Go Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
