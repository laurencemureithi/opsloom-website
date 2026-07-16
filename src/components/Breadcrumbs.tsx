import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  path?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);
  return (
    <nav className={`flex items-center gap-1.5 text-xs text-ops-gray-400 dark:text-ops-gray-500 mb-6 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <Link to="/" className="hover:text-ops-blue transition-colors">Home</Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight size={12} />
          {item.path ? (
            <Link to={item.path} className="hover:text-ops-blue transition-colors">{item.label}</Link>
          ) : (
            <span className="text-ops-gray-600 dark:text-ops-gray-300">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
