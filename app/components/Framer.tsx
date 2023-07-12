import * as React from "react";
import { motion } from "framer-motion";


const icon = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(255, 255, 255, 0)"
    },

    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(0, 0, 0, 0.8)"

    }
};


export const Example = () => (
    <div className=" w-10">
        <motion.svg
            viewBox="0 0 46 44"
            className="overflow-visible stroke-black dark:stroke-white "
        >
            <motion.path
                d="M15.845 0.644996L23.19 19.495L30.6 0.644996H45.745L28.845 44H17.6L0.7 0.644996H15.845Z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                }}
            />

        </motion.svg>
    </div>
);
