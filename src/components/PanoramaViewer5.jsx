
import React, { useEffect, useRef, useState } from 'react';
import { Move, RotateCw, ZoomIn, ZoomOut } from 'lucide-react';
import styles from './PanoramaViewer.module.css';

export default function Panorama360Viewer1() {
  const canvasRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const imageRef = useRef(null);

  // Your image URLs - add 2-3 images here
  const imageUrls = [
    
    'https://fra.cloud.appwrite.io/v1/storage/buckets/6949332400042773f869/files/6949336500338e1402fe/view?project=67eba0ea003447baa895&mode=all',
    'https://fra.cloud.appwrite.io/v1/storage/buckets/6949332400042773f869/files/6949335b00048cf42800/view?project=67eba0ea003447baa895&mode=all',
    'https://fra.cloud.appwrite.io/v1/storage/buckets/6949332400042773f869/files/6949334c0026eda049ab/view?project=67eba0ea003447baa895&mode=all',
    
  ];

  useEffect(() => {
    mergeAndLoadImages();
  }, []);

  const mergeAndLoadImages = async () => {
    setLoading(true);
    
    // Load all images
    const loadedImages = await Promise.all(
      imageUrls.map(url => {
        return new Promise((resolve) => {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.onload = () => resolve(img);
          img.onerror = () => resolve(null);
          img.src = url;
        });
      })
    );

    const validImages = loadedImages.filter(img => img !== null);

    if (validImages.length === 0) {
      setLoading(false);
      return;
    }

    // Create merged panorama
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Calculate dimensions
    const targetHeight = Math.max(...validImages.map(img => img.height));
    const totalWidth = validImages.reduce((sum, img) => {
      const aspectRatio = img.width / img.height;
      return sum + (targetHeight * aspectRatio);
    }, 0);

    canvas.width = totalWidth;
    canvas.height = targetHeight;

    // Fill background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw all images side by side
    let currentX = 0;
    validImages.forEach((img) => {
      const aspectRatio = img.width / img.height;
      const scaledWidth = targetHeight * aspectRatio;
      
      ctx.drawImage(img, currentX, 0, scaledWidth, targetHeight);
      currentX += scaledWidth;
    });

    // Convert to image and load
    const mergedImg = new Image();
    mergedImg.onload = () => {
      imageRef.current = mergedImg;
      setImageLoaded(true);
      setLoading(false);
      drawPanorama();
    };
    mergedImg.src = canvas.toDataURL('image/jpeg', 0.95);
  };

  const drawPanorama = () => {
    const canvas = canvasRef.current;
    if (!canvas || !imageRef.current) return;

    const ctx = canvas.getContext('2d');
    const img = imageRef.current;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const imgWidth = img.width;
    const imgHeight = img.height;

    // Normalize rotation for seamless wrapping
    const normalizedRotY = ((rotation.y % imgWidth) + imgWidth) % imgWidth;
    
    const viewWidth = canvas.width / zoom;
    const viewHeight = canvas.height / zoom;

    const srcX = normalizedRotY;
    const srcY = Math.max(0, Math.min(rotation.x, imgHeight - viewHeight));
    
    // Draw the main portion
    const firstPartWidth = Math.min(viewWidth, imgWidth - srcX);
    
    ctx.drawImage(
      img,
      srcX, srcY, firstPartWidth, viewHeight,
      0, 0, firstPartWidth * zoom, canvas.height
    );

    // Wrap around if needed
    if (firstPartWidth < viewWidth) {
      const remainingWidth = viewWidth - firstPartWidth;
      ctx.drawImage(
        img,
        0, srcY, remainingWidth, viewHeight,
        firstPartWidth * zoom, 0, remainingWidth * zoom, canvas.height
      );
    }
  };

  useEffect(() => {
    if (imageLoaded) {
      drawPanorama();
    }
  }, [rotation, zoom, imageLoaded]);

  useEffect(() => {
    const handleResize = () => {
      if (imageLoaded) {
        drawPanorama();
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [imageLoaded, rotation, zoom]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastPos.x;
    const deltaY = e.clientY - lastPos.y;

    setRotation(prev => ({
      x: prev.x - deltaY * 0.5,
      y: prev.y - deltaX * 2
    }));

    setLastPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY * -0.001;
      setZoom(prev => Math.max(0.5, Math.min(3, prev + delta)));
    };

    canvas.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      canvas.removeElement('wheel', handleWheel);
    };
  }, []);

  const resetView = () => {
    setRotation({ x: 0, y: 0 });
    setZoom(1);
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p className={styles.loadingText}>Merging panorama images...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <canvas
        ref={canvasRef}
        className={`${styles.canvas} ${isDragging ? styles.dragging : styles.grab}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />

      {/* Controls Overlay */}
      <div className={styles.controlsOverlay}>
        <div className={styles.controlItem}>
          <Move size={16} />
          <span className={styles.controlLabel}>Drag to rotate 360°</span>
        </div>
        {/* <div className={styles.controlItem}>
          <ZoomIn size={16} />
          <span className={styles.controlLabel}>Scroll to zoom</span>
        </div> */}
        {/* <div className={styles.zoomDisplay}>
          Zoom: {zoom.toFixed(1)}x
        </div> */}
      </div>

      {/* Zoom Controls */}
      <div className={styles.zoomControls}>
        <button
          onClick={() => setZoom(prev => Math.min(3, prev + 0.2))}
          className={styles.controlButton}
          title="Zoom In"
        >
          <ZoomIn size={18} />
        </button>
        <button
          onClick={() => setZoom(prev => Math.max(0.5, prev - 0.2))}
          className={styles.controlButton}
          title="Zoom Out"
        >
          <ZoomOut size={18} />
        </button>
        <button
          onClick={resetView}
          className={styles.controlButton}
          title="Reset View"
        >
          <RotateCw size={18} />
        </button>
      </div>

      {/* Info Badge */}
      {/* <div className={styles.infoBadge}>
        <span className={styles.badgeHighlight}>{imageUrls.length} images merged</span> • 360° Panorama
      </div> */}
    </div>
  );
}