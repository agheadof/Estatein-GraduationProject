import  { useEffect, useState } from 'react';
import BlobIcon from '../icons/BlobIcon';

function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-purple95 dark:bg-gray15 flex items-center justify-center z-90 transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex space-x-2">
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
