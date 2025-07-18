import React, { useState } from 'react';
import { Field, Node, SubNode } from '../types';
import NodeDetail from './NodeDetail';

interface RoadmapViewProps {
  field: Field;
  isDarkMode: boolean;
}

const RoadmapView: React.FC<RoadmapViewProps> = ({ field, isDarkMode }) => {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [selectedSubNode, setSelectedSubNode] = useState<SubNode | null>(null);

  const handleNodeClick = (node: Node) => {
    setSelectedNode(selectedNode?.id === node.id ? null : node);
    setSelectedSubNode(null);
  };

  const handleSubNodeClick = (subNode: SubNode) => {
    setSelectedSubNode(subNode);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-dark-bg via-dark-surface to-dark-card' 
        : 'bg-gradient-to-br from-gray-50 to-gray-100'
    }`}>
      {/* Header */}
      <header className={`border-b shadow-sm transition-all duration-300 ${
        isDarkMode 
          ? 'bg-dark-surface border-dark-border' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
              isDarkMode 
                ? field.gradient.includes('neon') ? field.gradient : 'from-neon-blue to-neon-purple'
                : field.gradient
            } flex items-center justify-center text-white shadow-lg ${
              isDarkMode ? 'shadow-neon-sm' : ''
            }`}>
              <span className="text-2xl font-bold">{field.title[0]}</span>
            </div>
            <div>
              <h1 className={`text-3xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-dark-text' : 'text-gray-900'
              }`}>{field.title}</h1>
              <p className={`mt-1 transition-colors duration-300 ${
                isDarkMode ? 'text-dark-muted' : 'text-gray-600'
              }`}>{field.description}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Roadmap Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="relative">
          {/* SVG Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {field.nodes.map((node) => 
              node.connections?.map((connectionId) => {
                const targetNode = field.nodes.find(n => n.id === connectionId);
                if (!targetNode) return null;
                
                const startX = `${node.position.x}%`;
                const startY = `${node.position.y + 5}%`;
                const endX = `${targetNode.position.x}%`;
                const endY = `${targetNode.position.y - 5}%`;
                
                return (
                  <line
                    key={`${node.id}-${connectionId}`}
                    x1={startX}
                    y1={startY}
                    x2={endX}
                    y2={endY}
                    stroke="#E5E7EB"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className={`animate-pulse ${isDarkMode ? 'opacity-30' : ''}`}
                  />
                );
              })
            )}
          </svg>

          {/* Nodes */}
          <div className="relative" style={{ zIndex: 2, minHeight: '600px' }}>
            {field.nodes.map((node) => (
              <div
                key={node.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${node.position.x}%`,
                  top: `${node.position.y}%`,
                }}
              >
                {/* Main Node */}
                <div
                  onClick={() => handleNodeClick(node)}
                  className={`${
                    isDarkMode 
                      ? 'bg-dark-card border-dark-border hover:border-neon-blue hover:shadow-neon-md' 
                      : node.color
                  } rounded-2xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 min-w-[280px] ${
                    selectedNode?.id === node.id 
                      ? isDarkMode 
                        ? 'ring-4 ring-neon-blue scale-105 shadow-neon-lg' 
                        : 'ring-4 ring-blue-300 scale-105'
                      : ''
                  }`}
                >
                  <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-dark-text' : 'text-gray-900'
                  }`}>{node.title}</h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-dark-muted' : 'text-gray-600'
                  }`}>{node.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-dark-muted' : 'text-gray-500'
                    }`}>
                      {node.subNodes.length} especializaciones
                    </span>
                    <span className="text-2xl">
                      {selectedNode?.id === node.id ? '📖' : '📚'}
                    </span>
                  </div>
                </div>

                {/* Sub-nodes */}
                {selectedNode?.id === node.id && (
                  <div className="mt-4 space-y-3 animate-fadeIn">
                    {node.subNodes.map((subNode, index) => (
                      <div
                        key={subNode.id}
                        onClick={() => handleSubNodeClick(subNode)}
                        className={`rounded-xl p-4 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg border ml-8 ${
                          isDarkMode
                            ? 'bg-dark-surface border-dark-border hover:border-neon-purple hover:shadow-neon-sm'
                            : 'bg-white border-gray-200'
                        }`}
                        style={{
                          animationDelay: `${index * 100}ms`,
                        }}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className={`font-semibold mb-1 transition-colors duration-300 ${
                              isDarkMode ? 'text-dark-text' : 'text-gray-900'
                            }`}>{subNode.title}</h4>
                            <p className={`text-sm mb-3 transition-colors duration-300 ${
                              isDarkMode ? 'text-dark-muted' : 'text-gray-600'
                            }`}>{subNode.description}</p>
                            <div className="flex items-center space-x-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                subNode.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                                subNode.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {subNode.difficulty}
                              </span>
                              {subNode.estimatedTime && (
                                <span className={`text-xs transition-colors duration-300 ${
                                  isDarkMode ? 'text-dark-muted' : 'text-gray-500'
                                }`}>{subNode.estimatedTime}</span>
                              )}
                            </div>
                          </div>
                          <div className="text-lg">📋</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Node Detail Modal */}
      {selectedSubNode && (
        <NodeDetail
          subNode={selectedSubNode}
          onClose={() => setSelectedSubNode(null)}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
};

export default RoadmapView;