import React from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Supply Chain Intelligence Center
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Multi-Agent System with LangGraph, LangChain, and RAG
          </p>
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="text-green-600 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              System Ready for Deployment
            </h2>
            <p className="text-gray-600">
              Core infrastructure configured. Ready to deploy advanced multi-agent functionality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
