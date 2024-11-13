import React, { useEffect } from 'react';
import 'aframe';
import 'ar.js';

const ARComponent: React.FC = () => {
  useEffect(() => {
    // Ensure that A-Frame and AR.js are properly loaded
    require('aframe');
    require('ar.js');
  }, []);

  return (
    <a-scene
      embedded
      arjs='sourceType: webcam;'
      vr-mode-ui="enabled: false"
      renderer="logarithmicDepthBuffer: true;"
    >
      {/* Marker for image recognition */}
      <a-marker type="pattern" url="path/to/your-marker.patt">
        {/* Add your 3D model here */}
        <a-box position="0 0.5 0" material="color: red;"></a-box>
      </a-marker>

      {/* Add camera */}
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARComponent;
