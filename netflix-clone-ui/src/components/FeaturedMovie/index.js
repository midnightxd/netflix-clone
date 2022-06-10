import React from "react";
import './styles.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({item}) => {

  let firstDate = new Date(item.first_air_date);
  let geners = [];
  for(let i in item.genres) {
    geners.push( item.genres[i].name );
  }

  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="featured--vertical--fading">
        <div className="featured--horizontal--fading">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} points</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">{item.number_of_seasons} season{item.number_of_seasons !== 1 ? 's' : '' }</div>
          </div>
          <div className="featured--overview">{item.overview}</div>
          <div className="featured--buttons">
            <a href={`/watch/${item.id}`} className="featured--watchbutton"><span>▶</span> Watch</a>
            <a href={`/list/add/${item.id}`} className="featured--addbutton"><span>✚</span> Save</a>
          </div>
          <div className="featured--geners"><strong>Geners:</strong> {geners.join(', ')}</div>
        </div>
      </div>
    </section>
  );
}