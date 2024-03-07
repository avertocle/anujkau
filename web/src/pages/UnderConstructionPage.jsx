import { Link } from 'react-router-dom';
import { BuildingLibraryIcon } from '@heroicons/react/24/outline/index.js';

function UnderConstructionPage() {
  return (
    <div className="flex flex-col gap-6 items-center w-full py-16 text-primary">
      <h2 className="text-2xl">Under Construction</h2>
      <div className="opacity-30">
        <BuildingLibraryIcon className="w-full h-full" />
      </div>
      <p className="text-lg font-extralight">
        This page is under construction. Please visit after some time.
      </p>
      <div className="">
        <Link to="/" className="bg-primary text-white px-3 py-2 rounded-md active:scale-95">
          Home Page
        </Link>
      </div>
    </div>
  );
}

export default UnderConstructionPage;
