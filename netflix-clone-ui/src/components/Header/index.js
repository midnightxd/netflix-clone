import React from "react";
import './styles.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({show}) => {
  return (
    <header className={show ? 'header--show--bg' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
        </a>
      </div>
      <div className="header--user">
        <a target="_blank" href="https://github.com/midnightxd">
          <img src="https://avatars.githubusercontent.com/u/100091816?s=400&u=1ca6fd3e5ee6215047c75ddb0c09a46c904ae2e9&v=4" alt="User Logo" />
        </a>
      </div>
    </header>
  );
}