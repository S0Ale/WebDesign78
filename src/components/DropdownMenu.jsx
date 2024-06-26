import React, { useState } from 'react';
import { motion, useCycle } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const menuAnimation = {
    open: {opacity: 1, display: 'flex' },
    close: {
        opacity: 0, 
        transition: { ease: "linear", duration: .1, bounce: 0 },
        transitionEnd: {display: "none"}
    }
};

const DropdownMenu = (props) => {
    const [active, setActive] = useState(false);

    // now i can open and close with a click, but also when i click 
    // outside the menu
    const close = () => {
        setActive(false);
    }
    const toggle = () => {
        setActive(!active);
    }

    return (
        <button className="nav-link dropdown" onClick={toggle} onBlur={close}>
            <span>
                Indice<FontAwesomeIcon style={{marginLeft: '.5em', fontSize: '.9em'}} icon={faChevronDown}/>
            </span>
            <motion.div
                className="flex column dropdown-menu"
                initial={"close"}
                animate={active ? "open" : "close"}
                variants={menuAnimation}
            >
                {props.children}
            </motion.div>
        </button>
    );
};

export default DropdownMenu;