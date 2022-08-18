import React from 'react';

import authorImage from '../../images/author-image.jpg';

function About() {
  return (
    <section className='about'>
      <img className='about__image' alt='Author' src={authorImage}></img>
      <div className='about__text-container'>
        <h2 className='about__title'>About the author</h2>
        <p className='about__text'>
          Hi, I'm Alex and here I'm demonstrating you my final project of Yandex
          Practicum web development course. Here you can search for news
          articles and store them in your profile.
        </p>
        <p className='about__text'>
          I used 2 APIs: a public News API for news search, and my own main API
          written for user accounts and stored news management. React is used
          for the frontend and Express for the backend implementation, database
          - MongoDB.
        </p>
      </div>
    </section>
  );
}

export default About;
