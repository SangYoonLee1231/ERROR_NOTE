import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Nav.scss';

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-child nav__links">
        <span>
          <FontAwesomeIcon icon={faExternalLink} />
          &nbsp;
          <a href="https://github.com/SangYoonLee1231">GitHub</a>
        </span>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faExternalLink} />
          &nbsp;
          <a href="https://sylagape1231.tistory.com/">Blog</a>
        </span>
      </div>
      <div className="nav-child nav__title">
        <Link to="/ERROR_NOTE/">
          <span className="nav__title">ERROR NOTE</span>
        </Link>
      </div>
      <div className="nav-child nav__search-icon">
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </div>
    </header>
  );
}
