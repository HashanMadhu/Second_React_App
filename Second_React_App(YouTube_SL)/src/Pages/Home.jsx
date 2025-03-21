import React from 'react';
import NewSite from '../Components/NewSite';
import NewContent from '../Components/NewContent';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <NewSite project="React js"/>
      <NewSite project="HTML,CSS"/>
      <NewSite project="PHP"/>
      <NewContent/>
    </div>
  );
}
