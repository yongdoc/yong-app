import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const PageDetails = () => {
  const { id } = useParams()
  const { data: page, isPending, error } = useFetch('http://localhost:8000/pages/'+id);
  const nav = useNavigate();

  return ( 
    <div className="page-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {page && (
        <article>
          <h2>{page.title}</h2>
          <p>Added by {page.author}</p>
          <div>{page.body}</div>
        </article>
      )}
      <button onClick={() => nav(-1)}>back</button>
      <button onClick={() => console.log('haha')}>edit</button>
    </div>
  );
}
 
export default PageDetails;