// pages/index.tsx (VERSÃO CORRIGIDA)

import React from 'react';
// 1. Caminho de importação corrigido:
import SarandiMaisVerde from '../components/SarandiMaisVerde'; 

function HomePage() {
  return (
    <div>
      {/* 3. Usando o componente importado */}
      <SarandiMaisVerde />
      
      <h1>Olá Vercel! O Build vai funcionar agora.</h1>
      <p>O seu site está prestes a entrar no ar!</p>
    </div>
  );
}

// 2. Apenas UMA exportação padrão:
export default HomePage;
