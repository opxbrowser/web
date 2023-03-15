import React from "react";

import { motion } from "framer-motion";

export default function InfoContainer({ children, title, description }) {
  return (
    <div className="flex flex-col  w-full pl-24 pr-24 h-[100%] pt-28">
      <div className="flex flex-row items-center justify-between ">
        <div className="flex flex-row items-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{
              duration: 0.6,
              type: "spring",
            }}
            className="w-[120px] h-[4px] bg-dark"
          />
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="ml-14 font-semibold text-6xl"
          >
            {title}
          </motion.span>
        </div>
        {description && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="text-base text-primary-400 font-normal mr-44"
          >
            {description}
          </motion.span>
        )}
      </div>
      <div className="pl-44 pr-44 mt-14 text-dark">{children}</div>
    </div>
  );
}
