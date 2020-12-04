import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Hero>
      <Banner title="Coming Soon" subtitle="Stay Tuned...">
        <Link to="/" className="btn-primary">
          Click here to go back to main page
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
