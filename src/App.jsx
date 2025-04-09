import { useState } from 'react'
import './App.css'

import articlesArray from './data/titles.json'

export default function App() {
  const initialTitles = articlesArray.map(article => article.title);
  
  const [titles, setTitles] = useState(initialTitles);
  const [title, setTitle] = useState('');

  const userFeedBack = (event) => {
    event.preventDefault();
    
    if (title.trim() === '') return alert(`Input non valido`);

    setTitles([...titles, title]);
    alert(`"${title}" aggiunto alla lista!`);
    setTitle('');
  };

  return (
    <main>
      <ul>
        {titles.map((title, i) => <li key={i}>{title}</li>)}
      </ul>

      <form onSubmit={userFeedBack}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
        <button type="submit">Aggiungi</button>
      </form>
    </main>
  )
}