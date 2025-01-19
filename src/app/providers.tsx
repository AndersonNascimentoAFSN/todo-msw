"use client";


(async () => {
  try {
    if (
      process.env.NEXT_RUNTIME !== 'nodejs' &&
      process.env.NEXT_PUBLIC_MSW_MOCK === 'true'
    ) {
      const { worker } = await import('../mocks/browser');
      await worker.start();
    }
  } catch (error) {
    console.error('Erro ao iniciar o mock worker:', error);
  }
})().catch((error) => {
  console.error('Erro inesperado na inicialização:', error);
});

export function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}