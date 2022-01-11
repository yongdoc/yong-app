import useFetch from "./useFetch";
import { useState } from "react";

const Create = () => {
  const { data: authors } = useFetch('http://localhost:8000/authors/');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('yong');

  const handleSubmit = (e) => {
    e.preventDefault();
    const page = { title, body, author};
    console.log(page);

    fetch('http://localhost:8000/pages', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(page)
    }).then(() => {
      console.log('new page added.');
    })
  }

  return ( 
    <div className="create">
      <h2>Add a New Page</h2>
      {authors && 
      <form onSubmit={handleSubmit}>
        <label>Page title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Page body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Page author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          {authors.map((temp) => (
            <option key={temp.id} value={temp.name}>{temp.name}</option>
          ))}
        </select>
        <button>Add Page</button>
      </form>
      }
    </div>
  );
}
 
export default Create;