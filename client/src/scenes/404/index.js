import "./404.scss";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="missing-page-container">
      <p>Sorry, page does not exist</p>
      <Link to="/" className="link-button">
        back
      </Link>
    </div>
  );
}

export default PageNotFound;
