import { useEffect, useState } from 'react';
import logoIcon from '../assets/logoo-removebg-preview.png';

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1400);
    const removeTimer = setTimeout(() => setRemoved(true), 2000);
    return () => { clearTimeout(timer); clearTimeout(removeTimer); };
  }, []);

  if (removed) return null;

  return (
    <div className={`fixed inset-0 z-[200] flex items-center justify-center bg-white dark:bg-ops-black transition-opacity duration-500 ${hidden ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex flex-col items-center">
        <img src={logoIcon} alt="Opsloom" className="h-20 w-auto mb-6 animate-pulse-slow" />
        <div className="loader-ring" />
        <p className="mt-4 text-sm text-ops-gray-400 font-medium tracking-wider">Loading Opsloom...</p>
      </div>
    </div>
  );
}
