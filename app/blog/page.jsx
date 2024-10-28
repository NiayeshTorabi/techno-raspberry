"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Blog = () => {
  return <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 flex flex-col gap-5 m-3"
    >
      
    </motion.section>
};

export default Blog;
