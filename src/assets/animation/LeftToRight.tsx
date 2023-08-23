import { motion } from "framer-motion";
interface props {
  children: React.ReactNode;
  delay:number;

}
const LeftToRight = ({ children, delay }:props) => {
  return (
    <motion.div
    initial={{ x: -50, opacity: 0}}
    whileInView={{ x: 0,opacity: 1 }}
    transition={{
      ease: [0, 0.71, 0.2, 1.01],
      duration: 1,
      delay,
      x: { duration: 1 }
    }}
    viewport={{ once: true }}
    >
        {children}
    </motion.div>
  );
};

export default LeftToRight;