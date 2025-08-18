'use client';

import { useEffect } from 'react';

interface PageOverflowProps {
  topColor?: string;
  bottomColor?: string;
}

export default function PageOverflow({ 
  topColor = '#8A0933', // default maroon
  bottomColor = '#333333' // default dark gray
}: PageOverflowProps) {
  useEffect(() => {
    // Create or update style element for overflow colors
    let styleElement = document.getElementById('page-overflow-styles');
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'page-overflow-styles';
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = `
      body::before {
        content: '';
        position: fixed;
        top: -100vh;
        left: 0;
        right: 0;
        height: 100vh;
        background: ${topColor} !important;
        z-index: -1;
        pointer-events: none;
      }
      
      body::after {
        content: '';
        position: fixed;
        bottom: -100vh;
        left: 0;
        right: 0;
        height: 100vh;
        background: ${bottomColor} !important;
        z-index: -1;
        pointer-events: none;
      }
    `;
  }, [topColor, bottomColor]);

  return null;
}