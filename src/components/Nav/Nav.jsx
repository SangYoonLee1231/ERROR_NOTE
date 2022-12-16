import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__search-icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className="nav__title">
        <span className="nav__title">ERROR NOTE</span>
      </div>
      <div />
    </header>
  );
}
