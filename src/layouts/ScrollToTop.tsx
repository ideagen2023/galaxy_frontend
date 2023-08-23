
import Hand from "../assets/hand.png";
import Chakra from "../assets/chakra.png";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import CircularProgress from '@mui/material/CircularProgress';
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
}

const ScrollToTop = ({ children }: Props) => {
  const location = useLocation();

  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    // window.onload = () => {
    //   setLoading(false);
    // }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [location]);

    
 if (loading){
    return (
      <div className="vp-load">
      <img src={Hand} alt="logo" width="300px" className="hand"/>
        <img src={Chakra} alt="Chakra" width="80px" className="rotateandscale" />
    </div>
    );
  }

  return <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
  >
      {children}
  </motion.div>;
};

export default ScrollToTop;

