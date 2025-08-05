import { useEffect, useState } from 'react';
import BlobIcon from '../icons/BlobIcon';

function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[90] flex items-center justify-center transition-opacity duration-700
        ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FBFAFF] via-[#DBCEFD] to-[#703BF7] dark:hidden opacity-30 blur-2xl" />
      <div className="absolute inset-0 bg-gray15 hidden dark:block" />
      <div className="relative z-10 flex space-x-2">
        <span className="w-10 h-10 animate-dotBounce animation-delay-[0.4s]">
          <BlobIcon />
        </span>
        <span className="w-10 h-10 animate-dotBounce animation-delay-[0.25s]">
          <BlobIcon />
        </span>
        <span className="w-10 h-10 animate-dotBounce animation-delay-[0.1s]">
          <BlobIcon />
        </span>
      </div>
    </div>
  );
}

export default Loader;
