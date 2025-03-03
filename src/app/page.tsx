'use client';

import { useAPI } from './hooks/useAPI';

export default function Home() {
  const { data, loading, error } = useAPI();

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  if (error) {
    return <div>Ocurrió un error: {error}</div>;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Respuesta de la API Random User</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <div>No hay datos disponibles</div>
      )}
    </div>
  );
}