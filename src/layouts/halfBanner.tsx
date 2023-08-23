import Fadeup from "../assets/animation/Fadeup";
import { useScroll, useTransform } from "framer-motion";

import { motion } from "framer-motion";
interface props{
  title:string,
  titletwo:string
}
const HalfBanner = ({title,titletwo}:props) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]); 
  return (
    <section style={{paddingTop:"130px"}}>
        <div className="container py-5 half-banner oh">
            <div className="halfbanner-content py-5">
                <Fadeup delay={0}>
                <h1 className="fw-bold">{title}</h1>
                </Fadeup>
                <Fadeup delay={0}>
                <h4 className="fw-bold">Home / {title} {titletwo}</h4>
                </Fadeup>
            </div>
            <motion.img 
            src="https://ik.imagekit.io/lt20pon3d/img/granddaughter-talking-with-her-grandmother-sitting-wheelchair-cheerful-concept-happy-family.jpg?updatedAt=1692595269677"
            style={{scale}}>
            </motion.img>
        </div>
    </section>
  );
};

export default HalfBanner;

