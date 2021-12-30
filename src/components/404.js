import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 
    <div className="notfound">
      <h1>Error 404 - Not Found!</h1>
      <p>There is no page <b>{window.location.href}</b></p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
 
export default NotFound;