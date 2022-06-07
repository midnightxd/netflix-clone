import React from "react";
import './featuredMovie.css'

export default ({item}) => {
  return (
    <section className="featured">
      <div>{item.last_air_date}</div>
    </section>
  );
}

