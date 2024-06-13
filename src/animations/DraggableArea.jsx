import { motion, useDragControls } from "framer-motion";
import { query } from "../scripts/utils";

const DraggableArea = (props) => {
    const dragControls = useDragControls();

    return (
        <motion.div layout className={props.className} id={props.id}
            drag
            dragControls={dragControls}
            dragConstraints={props.constraints}
            dragTransition={{type: "inertia", power:0.2, timeConstant: 200}}
            style={{ touchAction: "none" }}

            onDragStart={() => {
                query('.article').forEach(element => {
                    element.style.pointerEvents = "none"; 
                });
                
            }}
            onDragEnd={() => {
                query('.article').forEach(element => {
                    element.style.pointerEvents = "auto"; 
                });
            }}
        >
            {props.children}
        </motion.div>
    );
}

export default DraggableArea;