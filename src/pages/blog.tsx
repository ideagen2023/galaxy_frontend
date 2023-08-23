import worldmap from "../../img/worldmap.png";
import data from "../../data.json";
import Fadeup from "../assets/animation/Fadeup";
import { Link } from "react-router-dom";
import Form from "../layouts/EnquiryForm";
import LeftToRight from "../assets/animation/LeftToRight";

const Blog = () => {
    return (
      <>
        <section className="bg-pri py-6 relative oh">
            <div className="container mt-5 pt-6">
              <img src={worldmap} alt="world map" className="half-banner-map" />
              <LeftToRight delay={0}>
                <h1 className="fw-bold fc-white">Blog</h1>
              </LeftToRight>
              <LeftToRight delay={0.1}>
                <h5 className="fc-white">Home / Blog</h5>
              </LeftToRight>
            </div>
        </section>
        <section>
            <div className="container py-6">
                <h2 className="fw-bold">Our latest Blogs</h2>
                <div className="row pt-5">
                    {data.blog.map((blog,i)=>(
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

            </div>
        </section>
        <section>
            <Form />
        </section>
      </>
    );
  };
  
  export default Blog;
  