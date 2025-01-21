# Mind-map-flowchart.

We have two components, flow and custom flow.

# Flow is standard flowchart using default nodes connected via edges.

# Custom flow has custom nodes connected via edges.

Each custom node is just a component having two main components:

# Handle
Gives points for connection with other nodes.
Each handle has a unique id.
We use this id as sourceHandle or targetHandle when making edges.

# Standard HTML
We can use divs to create a custom node and give it properties we wish.
We can even pass some data from parent to child custom node and use it using argument data.

# Note : It is important to give good amount of height - width to the div rendering React-flow components as child.