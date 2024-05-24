import { motion, useDragControls } from "framer-motion";

const DraggableArea = (props) => {
    const dragControls = useDragControls();

    return (
        <motion.div className={props.className}
            drag
            dragControls={dragControls}
            dragConstraints={props.constraints}
            style={{ touchAction: "none" }}
        >
            {props.children}
        </motion.div>
    );
}

export default DraggableArea;