'use client';

import { useEffect, useState } from 'react';
// import { worker } from '../mocks/browser'

export function useMSW(): boolean {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function startMockWorker() {
      try {
        if (process.env.NEXT_RUNTIME !== 'nodejs' && process.env.NEXT_PUBLIC_MSW_MOCK === 'true') {
          const { worker } = await import('../mocks/browser');
          await worker.start();
          // Promise.resolve(() => worker.start());
          console.log('✅ MSW iniciado com sucesso');
          setIsReady(true);
        } else {
          setIsReady(true); // Caso não esteja ativado, prossegue normal
        }
      } catch (error) {
        console.error('🚨 Erro ao iniciar o mock worker:', error);
        setIsReady(true); // Evita travamento caso haja erro
      }
    }

    startMockWorker();
  }, []);

  return isReady; // Retorna `true` quando o MSW estiver pronto
}
