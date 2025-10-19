import { useState, useCallback } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeftIcon,
  PlayIcon,
  StopIcon,
  PlusIcon,
  TrashIcon,
  Cog6ToothIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  UserPlusIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'

interface Node {
  id: string
  type: 'trigger' | 'condition' | 'action'
  title: string
  description: string
  icon: any
  x: number
  y: number
  config?: any
}

interface Connection {
  id: string
  from: string
  to: string
}

const nodeTypes = [
  {
    type: 'trigger',
    title: 'Message Received',
    description: 'Trigger when a new message arrives',
    icon: ChatBubbleLeftRightIcon,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    type: 'trigger',
    title: 'New Follower',
    description: 'Trigger when someone follows you',
    icon: UserPlusIcon,
    color: 'bg-green-100 text-green-600',
  },
  {
    type: 'trigger',
    title: 'Comment Received',
    description: 'Trigger when someone comments on your post',
    icon: ChatBubbleLeftRightIcon,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    type: 'condition',
    title: 'Keyword Check',
    description: 'Check if message contains specific keywords',
    icon: Cog6ToothIcon,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    type: 'condition',
    title: 'Time Check',
    description: 'Check current time or day',
    icon: ClockIcon,
    color: 'bg-orange-100 text-orange-600',
  },
  {
    type: 'action',
    title: 'Send Reply',
    description: 'Send an automated reply',
    icon: ChatBubbleLeftRightIcon,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    type: 'action',
    title: 'Like Post',
    description: 'Like the user\'s recent post',
    icon: HeartIcon,
    color: 'bg-red-100 text-red-600',
  },
  {
    type: 'action',
    title: 'Follow User',
    description: 'Follow the user back',
    icon: UserPlusIcon,
    color: 'bg-green-100 text-green-600',
  },
]

export default function AutomationBuilder() {
  const [nodes, setNodes] = useState<Node[]>([])
  const [connections, setConnections] = useState<Connection[]>([])
  const [selectedNode, setSelectedNode] = useState<Node | null>(null)
  const [isPreviewMode, setIsPreviewMode] = useState(false)
  const [automationName, setAutomationName] = useState('')

  const addNode = useCallback((nodeType: typeof nodeTypes[0], x: number, y: number) => {
    const newNode: Node = {
      id: `node-${Date.now()}`,
      type: nodeType.type as 'trigger' | 'condition' | 'action',
      title: nodeType.title,
      description: nodeType.description,
      icon: nodeType.icon,
      x,
      y,
    }
    setNodes(prev => [...prev, newNode])
  }, [])

  const deleteNode = useCallback((nodeId: string) => {
    setNodes(prev => prev.filter(node => node.id !== nodeId))
    setConnections(prev => prev.filter(conn => conn.from !== nodeId && conn.to !== nodeId))
    if (selectedNode?.id === nodeId) {
      setSelectedNode(null)
    }
  }, [selectedNode])

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedNode(null)
    }
  }

  const handleNodeClick = (node: Node) => {
    setSelectedNode(node)
  }

  const handleDragStart = (e: React.DragEvent, nodeType: typeof nodeTypes[0]) => {
    e.dataTransfer.setData('application/json', JSON.stringify(nodeType))
  }

  const handleCanvasDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const nodeType = JSON.parse(e.dataTransfer.getData('application/json'))
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    addNode(nodeType, x, y)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const saveAutomation = () => {
    if (!automationName.trim()) {
      toast.error('Please enter an automation name')
      return
    }
    if (nodes.length === 0) {
      toast.error('Please add at least one node to your automation')
      return
    }
    toast.success('Automation saved successfully!')
  }

  const testAutomation = () => {
    if (nodes.length === 0) {
      toast.error('Please add nodes to test your automation')
      return
    }
    setIsPreviewMode(true)
    toast.success('Running test...')
    setTimeout(() => {
      setIsPreviewMode(false)
      toast.success('Test completed successfully!')
    }, 3000)
  }

  return (
    <>
      <Head>
        <title>Automation Builder - ZideaAI</title>
        <meta name="description" content="Build custom automation flows with our visual editor." />
      </Head>

      <div className="h-screen bg-gray-50 flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link href="/dashboard" className="text-primary-600 hover:text-primary-500">
                  <ArrowLeftIcon className="w-5 h-5" />
                </Link>
                <h1 className="ml-4 text-xl font-bold text-gray-900">Automation Builder</h1>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  value={automationName}
                  onChange={(e) => setAutomationName(e.target.value)}
                  placeholder="Enter automation name"
                  className="input-field w-64"
                />
                <button
                  onClick={testAutomation}
                  className="btn-secondary"
                  disabled={isPreviewMode}
                >
                  {isPreviewMode ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600 mr-2"></div>
                      Testing...
                    </>
                  ) : (
                    <>
                      <PlayIcon className="w-4 h-4 mr-2" />
                      Test
                    </>
                  )}
                </button>
                <button
                  onClick={saveAutomation}
                  className="btn-primary"
                >
                  <CheckCircleIcon className="w-4 h-4 mr-2" />
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Toolbox */}
          <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Automation Components</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Triggers</h4>
                  <div className="space-y-2">
                    {nodeTypes.filter(n => n.type === 'trigger').map((nodeType, index) => (
                      <div
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, nodeType)}
                        className="p-3 border border-gray-200 rounded-lg cursor-move hover:border-primary-300 hover:bg-primary-50 transition-colors"
                      >
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${nodeType.color}`}>
                            <nodeType.icon className="w-4 h-4" />
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900">{nodeType.title}</div>
                            <div className="text-xs text-gray-500">{nodeType.description}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Conditions</h4>
                  <div className="space-y-2">
                    {nodeTypes.filter(n => n.type === 'condition').map((nodeType, index) => (
                      <div
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, nodeType)}
                        className="p-3 border border-gray-200 rounded-lg cursor-move hover:border-primary-300 hover:bg-primary-50 transition-colors"
                      >
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${nodeType.color}`}>
                            <nodeType.icon className="w-4 h-4" />
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900">{nodeType.title}</div>
                            <div className="text-xs text-gray-500">{nodeType.description}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Actions</h4>
                  <div className="space-y-2">
                    {nodeTypes.filter(n => n.type === 'action').map((nodeType, index) => (
                      <div
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, nodeType)}
                        className="p-3 border border-gray-200 rounded-lg cursor-move hover:border-primary-300 hover:bg-primary-50 transition-colors"
                      >
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${nodeType.color}`}>
                            <nodeType.icon className="w-4 h-4" />
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900">{nodeType.title}</div>
                            <div className="text-xs text-gray-500">{nodeType.description}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Canvas */}
          <div className="flex-1 relative">
            <div
              className="w-full h-full bg-gray-50 relative overflow-auto"
              onClick={handleCanvasClick}
              onDrop={handleCanvasDrop}
              onDragOver={handleDragOver}
            >
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-30">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Nodes */}
              {nodes.map((node) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`absolute cursor-pointer ${
                    selectedNode?.id === node.id ? 'ring-2 ring-primary-500' : ''
                  }`}
                  style={{ left: node.x, top: node.y }}
                  onClick={() => handleNodeClick(node)}
                >
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 min-w-[200px]">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        node.type === 'trigger' ? 'bg-blue-100 text-blue-600' :
                        node.type === 'condition' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        <node.icon className="w-4 h-4" />
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          deleteNode(node.id)
                        }}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-sm font-medium text-gray-900 mb-1">
                      {node.title}
                    </div>
                    <div className="text-xs text-gray-500">
                      {node.description}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Empty State */}
              {nodes.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <PlusIcon className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Start Building Your Automation
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Drag components from the toolbox to create your automation flow
                    </p>
                    <div className="text-sm text-gray-400">
                      Tip: Start with a trigger, add conditions, then define actions
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Properties Panel */}
          {selectedNode && (
            <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Properties</h3>
                  <button
                    onClick={() => setSelectedNode(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Node Title
                    </label>
                    <input
                      type="text"
                      value={selectedNode.title}
                      onChange={(e) => {
                        setSelectedNode(prev => prev ? { ...prev, title: e.target.value } : null)
                        setNodes(prev => prev.map(node => 
                          node.id === selectedNode.id ? { ...node, title: e.target.value } : node
                        ))
                      }}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={selectedNode.description}
                      onChange={(e) => {
                        setSelectedNode(prev => prev ? { ...prev, description: e.target.value } : null)
                        setNodes(prev => prev.map(node => 
                          node.id === selectedNode.id ? { ...node, description: e.target.value } : node
                        ))
                      }}
                      rows={3}
                      className="input-field"
                    />
                  </div>

                  {selectedNode.type === 'trigger' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Trigger Settings
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded" />
                          <span className="ml-2 text-sm text-gray-700">Enable this trigger</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded" />
                          <span className="ml-2 text-sm text-gray-700">Run only during business hours</span>
                        </label>
                      </div>
                    </div>
                  )}

                  {selectedNode.type === 'condition' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Condition Logic
                      </label>
                      <select className="input-field">
                        <option>Contains keyword</option>
                        <option>Does not contain keyword</option>
                        <option>Matches pattern</option>
                        <option>Is from verified user</option>
                      </select>
                    </div>
                  )}

                  {selectedNode.type === 'action' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Action Settings
                      </label>
                      <div className="space-y-2">
                        <input
                          type="text"
                          placeholder="Message template"
                          className="input-field"
                        />
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded" />
                          <span className="ml-2 text-sm text-gray-700">Include user's name</span>
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
