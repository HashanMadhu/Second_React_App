import React from 'react';
import NewSite from '../Components/NewSite';
import NewContent from '../Components/NewContent';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home Page test</h1>
      <NewSite project="React js" using="JavaScript" end="Hello"/>
      <NewSite project="HTML" using="CSS" end="Hi"/>
      <NewSite project="PHP"using="CSS" end="Bye"/>

      <Link to="about"> Go to About page </Link>
      <br />
      <Link to="contact">Go to Contact Page</Link>
      
    </div>
  );
}
