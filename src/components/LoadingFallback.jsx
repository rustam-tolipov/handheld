import { Html } from '@react-three/drei';
import React from 'react';

const LoadingFallback = () => {
  return (
    <Html center>
      <div className='loading'>
        <span className='loading-text'>Loading...</span>
      </div>
    </Html>
  );
};

export default LoadingFallback;
