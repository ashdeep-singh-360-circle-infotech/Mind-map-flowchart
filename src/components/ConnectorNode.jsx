import { Handle, Position } from '@xyflow/react';

/**
 * This is our custom node that we are creating to display node in way we want
 * When calling this component , we send two arguments
 * isConnectable -> ( Boolean ) -> Shows if node should be able to connect dynamically or not
 * data -> ( any ) -> The values which we wish to display in our node
 */
function ConnectorNode({ data, isConnectable }) {
    /**
     * Handle is used for connecting nodes. Each Handle has the following :
     * type -> To tell what kind of node Handle we want. It is of two types :
     *          -> "target": Top handle is for incoming connections.
     *          -> "source": Bottom handles are for outgoing connections.
     *          -> isConnectable : Boolean to make nodes connectable or not.
     */
    return (
        <div>
            <Handle
                type="target"
                position={Position.Left}
                isConnectable={isConnectable}
            />
            <div className='bg-slate-500 w-40 h-40 flex justify-center items-center'>
                <label htmlFor="text">Text:</label>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                id="a"
                isConnectable={isConnectable}
            />
        </div>
    );
}

export default ConnectorNode;