import React from 'react';

const Blog = () => {
  return (
    <div className='container pt-20 mx-auto px-6'>
      <strong>1 . Difference between javascript and nodejs ?</strong>
      <ul>
        <li><strong>javascript</strong></li>
        <li>1 programing language </li>
        <li>2 used for any client-site activiy for a web application </li>
        <li>3 ran v8 for chrome or core for safari etc</li>
        <li className='pt-4'><strong>nodejs</strong></li>
        <li>1 interpreter for javascript</li>
        <li>2 used for accessing</li>
        <li>3 run v8 for chrome</li>
      </ul>
      <ul>
        <li className='pt-5'><strong>2. When should you use nodejs and when should you use ?</strong></li>
        <p>MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias.NodeJS's responsibilty is especially to execute your application.Everyone does as needed</p>
      </ul>
      <ul className='pt-5'>
        <li><strong>Differences between sql and nosql databases ? </strong></li>
        <li><strong>sql</strong></li>
        <li>Rational database </li>
        <li>verically scalable </li>
        <li>use sql</li>
        <li><strong>No Sql</strong></li>
        <li> non Rational database </li>
        <li>horizontallly  scalable</li>
        <li>use unstructured query</li>
      </ul>
      <strong className='pt-5 block'>3 . What is the purpose of jwt and how does it work ?</strong>
      <p>JWT API is a particularly useful technology for authentication and server-to-server authentication. It is used for safety api</p>
    </div>
  );
};

export default Blog;