import { motion } from "framer-motion";
const conf = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const AnimatedMain = (props) => {
    return (
        // attenzione: questo affare crea un elemento main, io gli passo le classi
        // che dovrebbe avere questo elemento main
        <motion.main className={props.className}
            variants={conf}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {props.children}
        </motion.main>
    );
};

export default AnimatedMain;