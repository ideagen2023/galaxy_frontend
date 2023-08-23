import { motion } from "framer-motion";

interface props {
  children: React.ReactNode;
  delay:number;
}


const Fadein = ({ children, delay }:props) => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.7 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay,
      ease: [0, 0.71, 0.2, 1.01]
    }}
    >
        {children}
    </motion.div>
  );
};

export default Fadein;