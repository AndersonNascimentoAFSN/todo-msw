"use client";

import { useMSW } from "@/hook/useMSW";

// (async () => {
//   try {
//     if (
//       process.env.NEXT_RUNTIME !== 'nodejs' &&
//       process.env.NEXT_PUBLIC_MSW_MOCK === 'true'
//     ) {
//       const { worker } = await import('../mocks/browser');
//       await worker.start();
//     }
//   } catch (error) {
//     console.error('Erro ao iniciar o mock worker:', error);
//   }
// })().catch((error) => {
//   console.error('Erro inesperado na inicialização:', error);
// });

export function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  const isMSWReady = useMSW();
  console.log('isMSWReady', isMSWReady);

  if (!isMSWReady) return <p>Inicializando mocks...</p>; // 🔥 Garante que o conteúdo só renderiza quando o MSW estiver pronto

  return (
    <>
      {children}
    </>
  )
}
