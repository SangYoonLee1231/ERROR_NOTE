import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Content.scss';

// md 파일 불러오기
import ReactNoteMD2211 from '../../../public/data/ERROR/React-Note/react_error_22-11.mdx';
import GitNoteMD2211 from '../../../public/data/ERROR/Git-Note/git_error_22-11.mdx';

export default function Main() {
  const [currentCategory, setCurrentCategory] = useState('');
  const { category } = useParams();

  useEffect(() => {
    setCurrentCategory(category);
  }, [category]);

  if (currentCategory === '') return null;

  if (currentCategory === 'react-2022-11') {
    return (
      <section className="main">
        <ReactNoteMD2211 />
      </section>
    );
  }

  if (currentCategory === 'git-2022-11') {
    return (
      <section className="main">
        <GitNoteMD2211 />
      </section>
    );
  }
}
