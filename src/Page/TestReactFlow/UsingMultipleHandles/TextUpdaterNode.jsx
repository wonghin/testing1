import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

export const handleStyle = { left: 10 };

function TextUpdaterNode({ data }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className="text-updater-node">

            {/* Handle is a tag to build connecting point */}
            <Handle type="target" position={Position.Top} />
            <div>
                <label htmlFor="text">Text:</label>
                <input id="text" name="text" onChange={onChange} />
            </div>


            <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} />
            <Handle type="source" position={Position.Bottom} id="b" />
        </div>
    );
}

export default TextUpdaterNode;