import { useState } from 'react'
import './App.css'

import articlesArray from './data/titles.json'


const articleTitles = articlesArray.map(article => article.title);

const renderItems = (titles) => {
  return titles.map((title, i) => <li key={i}>{title}</li>);
};

let titlesToDisplay = renderItems(articleTitles);

export default function App() {
  return (
    <ul>
      {titlesToDisplay}
    </ul>
  )
}