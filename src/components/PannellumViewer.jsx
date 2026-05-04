// src/components/PannellumViewer.jsx
import React, { useEffect, useRef } from "react";

export default function PannellumViewer({ src = "/assets/panorama/image-1.jpg" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // global pannellum should be available from CDN script
    if (window.pannellum) {
      window.pannellum.viewer(containerRef.current, {
        type: "equirectangular",
        panorama: src,
        autoLoad: true,
        showZoomCtrl: true,
      });
    }
  }, [src]);

  return <div ref={containerRef} style={{ width: "100%", height: "500px" }} />;
}
