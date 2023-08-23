import { Link } from "react-router-dom";
import HalfBanner from "../layouts/halfBanner";


const NotFound = () => {

  return (
    <section>
        <HalfBanner title="404" titletwo="Page Not Found"  />

        <Link to="/" className="notfound pb-5">
            <div className="btn-pri p-3 pb-4 mx-3 mt-3">
            <span className="hover-underline-animation">Return Home</span>
            </div>
        </Link>  
        
    </section>
  );
};

export default NotFound;
