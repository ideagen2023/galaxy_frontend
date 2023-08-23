import { Link } from "react-router-dom";
import data from "../../data.json";
import Fadeup from "../assets/animation/Fadeup";

const BlogCards = () => {
    return (  
        <div className="row">
        {data.blog.slice(0, 3).map((blog,i)=>(
        <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
        <Fadeup delay={i*0.2}>
            <div className="card bg-ffw mb-4">
            <div className="card-img">
                <img src={blog.blog_cover} alt={blog.blog_title} />
                {/* <img src="https://images.pexels.com/photos/9454915/pexels-photo-9454915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/> */}
            </div>
            <div className="card-content p-4">
                <p className="p-0 m-0">{blog.blog_date}</p>
                <h4 className="clamp-3">{blog.blog_title}</h4>
                <p className="clamp-5">{blog.blog_desc_one}</p>
                <Link to= {`/blog/${blog?.blog_title}`}>
                <div className="btn-outlined">
                    Continue Reading
                </div>
                </Link>
            </div>
            </div>
        </Fadeup>
        </div>
        ))}
        </div>    
    );
  }
  
  export default BlogCards;