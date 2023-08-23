import { motion } from "framer-motion";
import HalfBanner from "../layouts/halfBanner";
import map from "../assets/pattern.jpg";
import worldmap from "../../img/worldmap.png";
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import data from "../../data.json";
import { useParams } from "react-router-dom";
import Form from "../layouts/EnquiryForm";
import BlogCards from "../layouts/BlogCards";
const BlogPage = () => {
    const { blog_title } = useParams();
    const filteredBlog = data.blog.filter(p => p.blog_title === blog_title);
  return (
    <>
        <section className="bg-pri py-6 relative oh">
            <div className="container mt-5 pt-6">
              <img src={worldmap} alt="world map" className="half-banner-map" />
                <h1 className="fw-bold fc-white">{filteredBlog[0].blog_title}</h1>
                <h5 className="fc-white">Home / Blog / {filteredBlog[0].blog_title}</h5>
            </div>
        </section>
        <section>
            <div className="container py-6">
                <div className="d-flex justify-content-center">
                <img src={filteredBlog[0].blog_cover} className="blog-cover"/>
                </div>
                <div className="d-flex justify-content-between pt-2">
                    <div>
                        <DateRangeOutlinedIcon/>
                        {filteredBlog[0].blog_date}
                    </div>
                    <div>
                        <AccountCircleOutlinedIcon/>
                        {filteredBlog[0].blog_by}
                    </div>
                </div>
                <h3 className="mt-3 fw-bold fc-pri">{filteredBlog[0].blog_title}</h3>
                <p>{filteredBlog[0].blog_desc_one}</p>
                <h4 className="fw-bold fc-lg">{filteredBlog[0].blog_title_two}</h4>
                <p>{filteredBlog[0].blog_desc_two}</p>
                <h4 className="fw-bold fc-lg">{filteredBlog[0].blog_title_three}</h4>
                <p>{filteredBlog[0].blog_desc_three}</p>
                <h4 className="fw-bold fc-lg">{filteredBlog[0].blog_title_four}</h4>
                <p>{filteredBlog[0].blog_desc_four}</p>
                <h4 className="fw-bold fc-lg">{filteredBlog[0].blog_title_five}</h4>
                <p>{filteredBlog[0].blog_desc_five}</p>
                <h4 className="fw-bold fc-lg">{filteredBlog[0].blog_title_six}</h4>
                <p>{filteredBlog[0].blog_desc_six}</p>
                <h4 className="fw-bold fc-lg">{filteredBlog[0].blog_title_seven}</h4>
                <p>{filteredBlog[0].blog_desc_seven}</p>
                <h4 className="fw-bold fc-lg">{filteredBlog[0].blog_title_eight}</h4>
                <p>{filteredBlog[0].blog_desc_eight}</p>
            </div>
        </section>
        <section className="blog relative">
        <div className="container py-6">
          <h2 className="text-center fw-bold">Read Related Articles</h2>
          <h5 className="text-center mb-5">Gain insights on trending education information.</h5>
            <BlogCards />
        </div>
        </section>
        <Form />

    </>
  );
};

export default BlogPage;
