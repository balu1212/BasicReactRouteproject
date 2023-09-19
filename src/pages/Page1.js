import React from "react";
import './Page1.css';
import { motion } from 'framer-motion';
import { useState } from "react";
function Page1() {
    const [move, setmove] = useState(false);
    const HandleClick = () => {
        setmove(!move);
    }
    return (
        <div className="Containerpage1">
            <div>
                <button className="submit" onClick={HandleClick}><b>Click</b></button>
            </div>
            <div>
                <div className="Container1">
                    <div className="cloud"></div>
                    <div className="cloud"></div>
                    <div className="cloud"></div>
                    <motion.div
                        animate={{ y: move ? -500 : 0 }}
                        transition={{ type: "tween", duration: 5 }}
                        className="balloon">
                        <div className="bottom"></div>
                        <div className="rope"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default Page1;