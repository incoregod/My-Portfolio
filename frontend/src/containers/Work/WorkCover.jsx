// import React from "react";
// import { motion } from "framer-motion";
// import "./WorkCover.scss";

// let coverVariants = {
//   hidden: {
//     opacity: 0,
//     scale: 0,
//   },
//   visible: {
//     whileInView: {
//       opacity: 1,
//       scale: [1, 0.5, 0.8, 0, 1],
//     },
//     transition: { duration: 1, ease: "easeInOut" },
//   },
// };

// const WorkCover = (props) => {
//   return (
//     <div className="app__works-cover">
//       <motion.div
//         className="app__works-coveritem"
//         variants={coverVariants}
//         whileInView={coverVariants.visible.whileInView}
//         transition={{ duration: 2, ease: "easeInOut" }}
//         whileHover={{
//           scale: [1, 0.3],
//           background:
//             "linear-gradient(278deg, rgba(255,255,255,0.4066001400560224) 0%, rgba(0,0,0,1) 82%)",
//         }}
//         onClick={() => props.handleCover()}
//       >
//         <motion.h2
//           whileInView={{
//             opacity: [0, 1],
//             scale: [0, 1.1, 0.5, 1, 0.5, 1.3, 0.8, 1],
//           }}
//           transition={{ duration: 2, ease: "easeInOut" }}
//         >
//           !Works ? <span className="under">'Error'</span> :{" "}
//           <span className="enjoy">'Try Me'</span>
//         </motion.h2>
//       </motion.div>
//     </div>
//   );
// };

// export default WorkCover;
