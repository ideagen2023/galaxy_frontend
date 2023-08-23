import { motion } from "framer-motion";
interface props {
  children: React.ReactNode;
}
const RightToLeft = ({ children }:props) => {
  return (
    <motion.div
    initial={{ x: 50, opacity: 1  }}
    whileInView={{ x: 0,opacity: 1 }}
    transition={{
      ease: [0, 0.71, 0.2, 1.01],
      duration: 0.5,
      x: { duration: 0.5 }
    }}
    viewport={{ once: true }}
    >
        {children}
    </motion.div>
  );
};

export default RightToLeft;