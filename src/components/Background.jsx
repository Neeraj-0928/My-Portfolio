import React from 'react';

const Background = () => {
  return (
    <div className="bg-mesh fixed inset-0">
      <div 
        className="floating-sphere w-96 h-96 bg-[#0891b2] top-[-10%] left-[-10%]" 
        style={{ animationDelay: '0s', animationDuration: '25s' }}
      ></div>
      <div 
        className="floating-sphere w-[500px] h-[500px] bg-[#0ea5e9] top-[20%] right-[-5%]" 
        style={{ animationDelay: '-5s', animationDuration: '30s' }}
      ></div>
      <div 
        className="floating-sphere w-[400px] h-[400px] bg-[#22d3ee] bottom-[-10%] left-[20%]" 
        style={{ animationDelay: '-10s', animationDuration: '35s' }}
      ></div>
      <div 
        className="floating-sphere w-[600px] h-[600px] bg-[#67e8f9] bottom-[10%] right-[10%]" 
        style={{ animationDelay: '-15s', animationDuration: '40s' }}
      ></div>
    </div>
  );
};

export default Background;
