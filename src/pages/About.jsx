import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
        <h2>About</h2>
        <Link to="/" className='btn'>Back Home</Link>
    </section>
  )
};

export default About;