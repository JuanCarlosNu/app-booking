import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <section className="booking-search">
        <h2>Find Your Perfect Stay</h2>
        {/* Booking search form will go here */}
      </section>

      <section className="categories">
        <h2>Categories</h2>
        {/* Categories content will go here */}
      </section>

      <section className="recommendations">
        <h2>Recommended Stays</h2>
        {/* Recommendations content will go here */}
      </section>
    </main>
  );
};

export default Main;
