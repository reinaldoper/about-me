import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatePresenceComponent = (show: string, value: string) => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-50 flex"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.div
            className="flex-1 bg-emerald-500 flex items-center justify-center"
            initial={{ x: 0 }}
            animate={{ x: "50vw" }}
            exit={{ x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          >
            <span className="text-white text-3xl font-bold tracking-widest">
              {show}
            </span>
          </motion.div>
          <motion.div
            className="flex-1 bg-cyan-500 flex items-center justify-center"
            initial={{ x: 0 }}
            animate={{ x: "-50vw" }}
            exit={{ x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          >
            <span className="text-white text-3xl font-bold tracking-widest">
              {value}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatePresenceComponent;
