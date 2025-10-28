
import React, { useState, useEffect } from 'react';

const AnimatedRing: React.FC = () => {
  const numBars = 60;
  const radius = 385;
  const barWidth = 10;
  const barHeight = 48;
  const progressBars = 25; // The length of the moving "comet"
  const [startBar, setStartBar] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartBar(prev => (prev + 1) % numBars);
    }, 50); // Controls the speed of the animation

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [numBars]);


  const bars = Array.from({ length: numBars }).map((_, i) => {
    const angle = (i / numBars) * 360;
    
    // Calculate the position of the current bar within the moving comet
    const posInComet = (i - startBar + numBars) % numBars;
    const isProgress = posInComet < progressBars;
    
    let style = {
      fill: 'currentColor',
      opacity: 1,
    };
    
    // Apply fading tail effect
    if (isProgress) {
        // Opacity fades from 1 at the head to ~0.3 at the tail
        style.opacity = 1 - (posInComet / progressBars) * 0.7;
    }

    return (
      <rect
        key={i}
        x={-barWidth / 2}
        y={-radius}
        width={barWidth}
        height={barHeight}
        rx="3"
        ry="3"
        className={isProgress ? "text-cyan-400" : "text-slate-700"}
        transform={`rotate(${angle} 0 0)`}
        style={style}
      />
    );
  });

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg
        width="800"
        height="800"
        viewBox="-400 -400 800 800"
        className="transform-gpu"
      >
        {bars}
      </svg>
    </div>
  );
};

export default AnimatedRing;