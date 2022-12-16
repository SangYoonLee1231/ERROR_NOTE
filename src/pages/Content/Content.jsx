import React from 'react';
import { useParams } from 'react-router-dom';

export default function Content() {
  const params = useParams();
  const { category } = params;

  return (
    <section>
      <div>Category</div>
      <div>{category}</div>
    </section>
  );
}
