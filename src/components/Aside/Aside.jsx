import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Aside.scss';

export default function Aside() {
  const [reactHidden, setReactHidden] = useState(true);
  const [nodejsHidden, setNodejsHidden] = useState(true);
  const [vanilajsHidden, setVanilajsHidden] = useState(true);
  const [gitHidden, setGitHidden] = useState(true);
  const [etcHidden, setEtcHidden] = useState(true);

  const toggleReactCategory = () => {
    if (reactHidden === true) {
      setReactHidden(false);
    } else {
      setReactHidden(true);
    }
  };

  const toggleNodejsCategory = () => {
    if (nodejsHidden === true) {
      setNodejsHidden(false);
    } else {
      setNodejsHidden(true);
    }
  };

  const toggleVanilajsCategory = () => {
    if (vanilajsHidden === true) {
      setVanilajsHidden(false);
    } else {
      setVanilajsHidden(true);
    }
  };

  const toggleGitCategory = () => {
    if (gitHidden === true) {
      setGitHidden(false);
    } else {
      setGitHidden(true);
    }
  };

  const toggleEtcCategory = () => {
    if (etcHidden === true) {
      setEtcHidden(false);
    } else {
      setEtcHidden(true);
    }
  };

  return (
    <aside className="side-bar">
      <div className="side-bar__category">
        <span className="category-title" onClick={toggleReactCategory}>
          React JS
        </span>
        <ul
          className={`side-bar__category__list ${
            reactHidden ? 'invisible' : ''
          }`}
        >
          <li>
            <Link to="/content/react-2022-11">2022년 11월</Link>
          </li>
          <li>
            <Link to="/content/react-2022-12">2022년 12월</Link>
          </li>
        </ul>
      </div>
      <div className="side-bar__category">
        <span className="category-title" onClick={toggleNodejsCategory}>
          Node JS
        </span>
        <ul
          className={`side-bar__category__list ${
            nodejsHidden ? 'invisible' : ''
          }`}
        >
          <li>
            <Link to="/content/nodejs-2022-11">2022년 11월</Link>
          </li>
          <li>
            <Link to="/content/nodejs-2022-12">2022년 12월</Link>
          </li>
        </ul>
      </div>
      <div className="side-bar__category">
        <span className="category-title" onClick={toggleVanilajsCategory}>
          Vanila JS
        </span>
        <ul
          className={`side-bar__category__list ${
            vanilajsHidden ? 'invisible' : ''
          }`}
        >
          <li>
            <Link to="/content/vanilajs-2022-11">2022년 11월</Link>
          </li>
          <li>
            <Link to="/content/vanilajs-2022-12">2022년 12월</Link>
          </li>
        </ul>
      </div>
      <div className="side-bar__category">
        <span className="category-title" onClick={toggleGitCategory}>
          Git
        </span>
        <ul
          className={`side-bar__category__list ${gitHidden ? 'invisible' : ''}`}
        >
          <li>
            <Link to="/content/git-2022-11">2022년 11월</Link>
          </li>
          <li>
            <Link to="/content/git-2022-12">2022년 12월</Link>
          </li>
        </ul>
      </div>
      <div className="side-bar__category">
        <span className="category-title" onClick={toggleEtcCategory}>
          Etc.
        </span>
        <ul
          className={`side-bar__category__list ${etcHidden ? 'invisible' : ''}`}
        >
          <li>
            <Link to="/content/etc-2022-11">2022년 11월</Link>
          </li>
          <li>
            <Link to="/content/etc-2022-12">2022년 12월</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
