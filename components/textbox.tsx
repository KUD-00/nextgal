import { useState } from 'react';

export default function Textbox({scenario, index}) {
    const [counter, setCounter] = useState<number>(index);

    return (
        <div>
          <div className="border border-blue-200 rounded p-6 my-4 w-96 dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
            <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
              Girl
            </p>

            <p className="my-1 text-gray-800 dark:text-gray-200">
              {scenario[counter]}
            </p>

          </div>

          <div>
            <button
              className="flex items-center justify-center absolute px-4 pt-1 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
              type="button"
              onClick={() => setCounter(counter+1)}
            >
              Next
            </button>
          </div>
        </div>
    );
}
