import React, { useEffect, useState } from 'react';

export const InitializationBoot: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 2600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="boot" aria-hidden="true">
      <div className="boot-frame">
        <span>SG</span>
        <p>INITIALIZING DIGITAL PORTFOLIO</p>
      </div>
    </div>
  );
};
