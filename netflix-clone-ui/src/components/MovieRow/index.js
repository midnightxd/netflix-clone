import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./styles.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, items }) => {
  const [scrollX, setScrollX] = useState(-410);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) x = 0;
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if ((window.innerWidth - listW) > x) x = (window.innerWidth - listW) - 60;
    setScrollX(x)
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movie--row--left" onClick={handleLeftArrow}>
        <ArrowBackIosNewIcon style={{ fontSize: 30 }} />
      </div>
      <div className="movie--row--right" onClick={handleRightArrow}>
        <ArrowForwardIosIcon style={{ fontSize: 30 }} />
      </div>
      <div className="movieRow--listfield">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 150,
            transition: '300ms',
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
