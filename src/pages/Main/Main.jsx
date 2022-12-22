import React from 'react';
// import { useParams } from 'react-router-dom';
import './Main.scss';

// md 파일 불러오기
import Sample from './sample.mdx';

export default function Main() {
  // const { category } = useParams();

  return (
    <section className="main">
      <div>Main</div>
      <Sample />
    </section>
  );
}
