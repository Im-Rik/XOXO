import React from "react";
import './block.css'

interface blockProps{
    value?: string  | null;
    onClick: () => void;
}

const Block: React.FC<blockProps> = ({value, onClick}) => {
    return(
        <div onClick={onClick} className="block-box">
            {value}
        </div>
    )
}

export default Block;