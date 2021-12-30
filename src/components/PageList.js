import { Link } from "react-router-dom";

const PageList = ({pages, title}) => {

  return ( 
    <div className="pagelist">
      <h2>{title}</h2>
      {pages.map((page) => (
        <div className="page-preview" key={page.id}>
          <Link to={`/pages/${page.id}`}>
            <h2>{page.title}</h2>
            <p>Uploaded by {page.author}</p>
          </Link>
        </div>
      ))}
    </div>
   );
}
 
export default PageList