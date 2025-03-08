'use client';

import { useAPI } from './hooks/useAPI';

export default function Home() {
  const { currentPerson, loading, error, history, fetchData } = useAPI();


  if (error) {
    return <div>Error loading data: {error}</div>;
  }

  return (
    <div className="grid grid-cols-[auto_1fr_auto] min-h-screen ">
      <aside className="p-6 border-r">
        <h1 className="text-lg font-bold mb-4">History of People</h1>
        <pre>{JSON.stringify(history,null, 2)}</pre>
      </aside>

      <main className="flex flex-col justify-center items-center p-8">
        <div>
          <h1 className="text-xl mb-4">Current person</h1>
          <pre>{JSON.stringify(currentPerson, null, 2)}</pre>
        </div>

        {loading && ( <div className="mt-4 text-center">Loading... </div>)}

      </main>

      <div className="flex justify-end items-start p-4">
        <button onClick={fetchData} className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Fetch Data
        </button>
      </div>

    </div>
  );
}