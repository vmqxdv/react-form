import { useState } from 'react'
import './App.css'

import articlesArray from './data/titles.json'

export default function App() {
  const initialTitles = articlesArray.map(article => article.title);
  
  const [titles, setTitles] = useState(initialTitles);
  const [title, setTitle] = useState('');

  const renderTable = (titles) => {
    return titles.map((title, i) => 
      <tr key={i}>
        <td>{title}</td>
        <td>
          <button id={'edit-title-'+i} onClick={editEntry}><i className="fa-solid fa-pen-to-square"></i></button>
          <button id={'delete-title-'+i} onClick={deleteEntry}><i className="fa-solid fa-trash-can"></i></button>
        </td>
      </tr>
    )
  }

  const userFeedBack = (event) => {
    event.preventDefault();
    
    if (title.trim() === '') return alert(`Input non valido`);

    setTitles([...titles, title]);
    alert(`"${title}" aggiunto alla lista!`);
    setTitle('');
  };

  const editEntry = (event) => {
    const elementIndex = Number(event.currentTarget.id.replace('edit-title-', ''));

    const newTitle = prompt(`Stai modificando: ${titles[elementIndex]}\n\nScrivi il nuovo titolo:`)

    titles[elementIndex] = newTitle;
    setTitles([...titles]);
    alert(`Titolo modificato!`);
  };

  const deleteEntry = (event) => {
    const elementIndex = Number(event.currentTarget.id.replace('delete-title-', ''));

    const confirmed = window.confirm(`Sei sicuro di voler eliminare il titolo: ${titles[elementIndex]}?`);

    if (!confirmed) return alert('Eliminazione annullata.')

    titles.splice(elementIndex, 1);

    setTitles([...titles]);
    alert(`Titolo eliminato!`);
  };

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Article Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {renderTable(titles)}
        </tbody>
      </table>

      <form onSubmit={userFeedBack}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
        <button type="submit">Aggiungi</button>
      </form>
    </main>
  )
}