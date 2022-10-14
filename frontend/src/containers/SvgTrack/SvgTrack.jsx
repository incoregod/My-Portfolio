import React from 'react'
import { motion, } from "framer-motion";
import './SvgTrack.scss'



const SvgTrack = ({ isMobile, isTablet, pathLength }) => {
  return (
    <>
      {!isMobile && !isTablet && <div className="line-container">
        <svg
          width="2151" height="4391" viewBox="0 0 2253 4191"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            style={{
              pathLength,
            }}
            fill="none"
            stroke="#f57f1e"
            strokeWidth="1"
            strokeDasharray="0"
            d="M1070.81 0V845.73H-347L1012.12 1799.83L957.469 1838.99L1098.51 1946.01L1248.36 1838.99L1188.42 1799.83H1098.51V2077.5" />
        </svg>
      </div>}
    </>
  )
}

export default SvgTrack