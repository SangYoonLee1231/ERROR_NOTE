import React from 'react';
import { Link } from 'react-router-dom';
import './Aside.scss';

export default function Aside() {
  return (
    <aside className="side-bar">
      <div className="side-bar__category">
        <span className="category-title">React</span>
        <ul className="side-bar__category__list">
          <li>
            <Link to="/content/react-2022-11">2022년 11월</Link>
          </li>
          <li>
            <Link to="/content/react-2022-12">2022년 12월</Link>
          </li>
        </ul>
      </div>
      <div className="side-bar__category">
        <span className="category-title">Git</span>
        <ul className="side-bar__category__list">
          <li>
            <Link to="/content/git-2022-11">2022년 11월</Link>
          </li>
          <li>
            <Link to="/content/git-2022-12">2022년 12월</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
