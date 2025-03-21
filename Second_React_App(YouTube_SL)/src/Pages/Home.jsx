import React from 'react';
import NewSite from '../Components/NewSite';
import NewContent from '../Components/NewContent';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <NewSite project="React js" using="JavaScript" end="Hello"/>
      <NewSite project="HTML" using="CSS" end="Hi"/>
      <NewSite project="PHP"using="CSS" end="Bye"/>
      
    </div>
  );
}
