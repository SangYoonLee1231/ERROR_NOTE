import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Nav.scss';

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-child nav__links">
        <span>
          <FontAwesomeIcon icon={faExternalLink} />
          &nbsp;GitHub
        </span>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faExternalLink} />
          &nbsp;Blog
        </span>
      </div>
      <div className="nav-child nav__title">
        <span className="nav__title">ERROR NOTE</span>
      </div>
      <div className="nav-child nav__search-icon">
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </div>
    </header>
  );
}
