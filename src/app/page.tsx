'use client';

import { useAPI } from './hooks/useAPI';

export default function Home() {
  const { currentPerson, loading, error, history, fetchData } = useAPI();


  if (error) {
    return <div>Error loading data: {error}</div>;
  }

  return (
    <div className="grid grid-columns-[20px_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <button onClick={fetchData} className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Fetch Data
      </button>
      {loading && <div style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Loading...</div>}

      <h1 className="text-xl">Current person</h1>
      <pre>{JSON.stringify(currentPerson, null, 2)}</pre>

      <h1>History of People</h1>
      <pre>{JSON.stringify(history,null, 2)}</pre>
    </div>
  );
}