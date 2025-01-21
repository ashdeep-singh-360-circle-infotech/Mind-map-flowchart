import {
    ReactFlow,
    Controls,
    Background
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Creating node(s)
/**
 * Each node have following : 
 * id -> unique identifier
 * data -> what it should display
 * position -> Co-ordinates when rendered first time on screen
 * type: 'inupt' -> Used ONLY for first node of program.
 */
const nodes = [
    {
        id: '1',
        data: { label: 'Login' },
        position: { x: 0, y: 0 },
        type: 'input',
    },
    {
        id: '2',
        data: { label: 'Dashboard' },
        position: { x: 100, y: 100 },
    },
    {
        id: '3',
        data: { label: 'Add Pics' },
        position: { x: 200, y: 200 },
    },
    {
        id: '4',
        data: { label: 'Go Live' },
        position: { x: 300, y: 300 },
        type: 'input',
    },
];

// Creating connecting edge(s)
/**
 * Each connection have following :
 * id -> Unique identifier
 * source -> The node from which the connection will begin
 * target -> The node at which the connection will end
 * label -> What gets written on the line connecting the two nodes(Optional)
 * type -> What type of line gets rendered on screen (Optional)
 *              -> step : lines with sharp angles (only if specified)
 *              -> default : curvy lines 
 */
const edges = [
    { id: '1-2', source: '1', target: '2', label: 'Navigate To', type: 'step' },
    { id: '2-3', source: '2', target: '3', label: 'Start Now', type: 'step' },
    //   Un Comment below line to have a pre-rendered connection bw node 3 & 4
    //   { id: '3-4', source: '3', target: '4', label: 'Finally', type: 'step' },
];

function Flow() {
    // // Always Store initial condition of nodes and edges in state 
    // const [nodes, setNodes] = useState(initialNodes);
    // const [edges, setEdges] = useState(initialEdges);

    // // Comment below method (and also in prop) to make nodes immovable 
    // const onNodesChange = useCallback(
    //     (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    //     [],
    // );

    // // after uncommenting the below code , we cant connect two nodes
    // const onConnect = useCallback(
    //     (params) => setEdges((eds) => addEdge(params, eds)),
    //     [],
    // );

    return (
        <div className='h-screen w-screen'>
            <ReactFlow
                nodes={nodes}
                // onNodesChange={onNodesChange}
                edges={edges}
                // onConnect={onConnect}
                fitView
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
}

export default Flow;
