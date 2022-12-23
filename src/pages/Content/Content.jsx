import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Content.scss';

export default function Content() {
  const [errorData, setErrorData] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    fetch(`/data/ErrorList/${category}.json`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setErrorData(data);
      });
  }, [category]);

  const categoryTitleArray = category.split('-');
  categoryTitleArray[0] = categoryTitleArray[0].toUpperCase();
  const [categoryName, year, month] = categoryTitleArray;

  // for (let i = 0; i < errorData.length; i++) {
  //   const { id, date, problem_title, link } = errorData[i];
  //   console.log(id, date, problem_title, link);
  // }

  if (errorData === []) return null;

  return (
    <section className="content">
      <div className="content-title">
        <h2 id="content-title">{`${categoryName} - ${year}년 ${month}월`}</h2>
      </div>
      <div className="content-list">
        <ul>
          {errorData.map(item => {
            const { id, date, problem_title, link } = item;
            return (
              <li>
                <h2>
                  {id}.{date}
                </h2>
                <a href={link}>{problem_title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
