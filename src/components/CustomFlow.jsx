import {
    ReactFlow
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import TextUpdaterNode from './TextUpdaterNode';
import DetailNode from './DetailNode';
import ConnectorNode from './ConnectorNode';

const rfStyle = {
    backgroundColor: '#B8CEFF',
};

/* We can have multiple types of nodes in different files
 and can use them by simply giving the node a type parameter 
 and importing the type parameter.
*/

const nodes = [
    {
        id: '1',
        type: 'textUpdater',
        position: { x: 0, y: 0 },
        data: { value: 123 },
    },
    {
        id: '2',
        type: 'Connector',
        position: { x: 300, y: 0 },
    },
    {
        id: '3',
        type: 'DetailedNode',
        position: { x: 600, y: 0 },
        data: { value: 321 },
        isConnectable: false
    }
];
/**
 * Here is what each edge holds
 * id -> 'unique identifier'
 * source -> The node from which the connection will begin
 * target -> The node at which the connection will end
 * label -> What gets written on the line connecting the two nodes(Optional)
 * type -> What type of line gets rendered on screen (Optional)
 *            -> step : lines with sharp angles (only if specified)
 *            -> default : curvy lines
 * sourceHandle -> This is the id in Source Handle with which we wish to make a connection
 * For example : our node with id : 1 has two Handles with id a and b.
 * Since we wish to make a connection using Handle with id a in node 1, we use sourceHandle as a
 * We also have targetHandle which we use only when we wish to a particular handle .
 * If the targetHandle is not provided,
 * the edge will connect to the first available handle or the default target position of the node.
 */
const edges = [
    { id: '1-2', source: '1', target: '2', label: 'Connect', type: 'step', sourceHandle: 'a' },
    { id: '2-3', source: '2', target: '3', sourceHandle: 'a' },
];

// make a pair of node-types and their respective imports.
const nodeTypes = { textUpdater: TextUpdaterNode, Connector: ConnectorNode, DetailedNode: DetailNode };

function Flow() {

    return (
        <div className='h-screen w-screen'>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                fitView
                style={rfStyle}
            />
        </div>
    );
}

export default Flow;