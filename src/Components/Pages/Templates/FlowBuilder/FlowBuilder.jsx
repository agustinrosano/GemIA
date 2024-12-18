import React, { useCallback, useState } from 'react';
import { addFlow } from '../../../../Firebase/FirebaseFunctions';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  addEdge,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import './FlowBuilder.css';

let id = 4; // Identificador único para nuevos nodos

export const FlowBuilder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([
    // { id: '1', type: 'input', data: { label: 'Pregunta 1: ¿Sí o No?' }, position: { x: 250, y: 5 } },
  ]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null); // Nodo seleccionado
  const [inputValue, setInputValue] = useState(''); // Valor para editar nodos

  // Agregar una nueva conexión entre nodos
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  // Seleccionar un nodo para editar
  const onNodeClick = (event, node) => {
    setSelectedNode(node);
    setInputValue(node.data.label);
  };

  // Guardar cambios en el nodo seleccionado
  const handleInputChange = (e) => setInputValue(e.target.value);
  const handleSave = () => {
    setNodes((nds) =>
      nds.map((node) => (node.id === selectedNode.id ? { ...node, data: { label: inputValue } } : node))
    );
    setSelectedNode(null);
  };

  // Agregar un nodo de pregunta
  const addQuestionNode = () => {
    const newNode = {
      id: `${id++}`,
      data: { label: 'Nueva Pregunta' },
      style: { 
         border: '2px solid rgb(86, 159, 224)',
         padding: '10px',
         borderRadius: '5px', 
         background: '#f0f8ff' },
    position: { x: Math.random() * 250 + 100, y: Math.random() * 250 + 100 },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  // Agregar un nodo de respuesta
  const addResponseNode = () => {
    const newNode = {
      id: `${id++}`,
      data: { label: 'Nueva Respuesta' },
      position: { x: Math.random() * 250 + 100, y: Math.random() * 250 + 100 },
      style: {
        border: '2px solid purple', // Bordes violeta
        padding: '10px',
        borderRadius: '5px',
        background: '#f8f0ff', // Fondo lila claro
      },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  // Generar el objeto de flujo
  const generateFlowObject = () => {
    // Filtra el nodo de ejemplo (id === '1')
    const filteredNodes = nodes.filter((node) => node.id !== '1');

    const flow = {
      flowId: 'encuesta123', // Aquí puedes usar un ID único para cada encuesta
      nodes: filteredNodes.map((node) => ({
        id: node.id,
        //type: node.type,
        label: node.data.label,
        next: edges
          .filter((edge) => edge.source === node.id)
          .map((edge) => edge.target),
      })),
      edges: edges.map((edge) => ({
        source: edge.source,
        target: edge.target,
      })),
    };

    console.log('Objeto generado para Firestore:', flow);
    handleFlowSubmit(flow)
  };

  const handleFlowSubmit = async (flow) => {
    try{
        await addFlow(flow)
        return console.log('EXITO')
    }catch(error){
        return console.log('error',error)
    }
  }


  return (
    <div style={{ height: '60vh', position: 'relative' }}>
      <div className="toolbar">
        <button className='anw' onClick={addQuestionNode}>Agregar Pregunta</button>
        <button className='resp' onClick={addResponseNode}>Agregar Respuesta</button>
        <button className='save' onClick={generateFlowObject}>Guardar Encuesta</button>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>

      {selectedNode && (
        <div className="edit-panel">
          <h3>Editar Nodo</h3>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button onClick={handleSave}>Guardar</button>
        </div>
      )}
    </div>
  );
};
