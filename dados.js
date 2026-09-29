// Catálogo Lobinho Imóveis — edite aqui para adicionar/alterar imóveis.
// preco: número em reais, ou null para "Consulte".
window.LOBINHO = {
  whatsapp: "5517991154582",
  imoveis: [
    {
      id: "casa-piscina", codigo: "LB-001",
      titulo: "Casa com piscina aquecida e garagem para 6 carros",
      tipo: "Casa", finalidade: "Venda",
      cidade: "São José do Rio Preto – SP", bairro: "Rio Preto e região",
      preco: 670000, precoNota: "Porteira fechada",
      quartos: 4, banheiros: 3, vagas: 6, area: null, areaTerreno: null,
      destaques: ["Piscina com aquecimento solar", "Sala de jogos", "Porcelanato em toda a casa", "Esquadrias em alumínio", "Porteira fechada (mobiliada)"],
      descricao: "Casa ampla com 4 quartos, 2 banheiros internos e 1 banheiro externo. Sala de estar, sala de jogos com mesa de sinuca e cozinha grande integrada ao espaço gourmet com churrasqueira. Toda fechada em alumínio supremo e inteira em porcelanato. Área externa com deck, piscina de 15 mil litros com aquecimento solar e garagem para 6 carros. Vendida porteira fechada.",
      fotos: 11, capa: 8, videos: ["video1"]
    },
    {
      id: "studio-duo-jk", codigo: "LB-002",
      titulo: "Studio mobiliado no Duo JK — Zona Sul",
      tipo: "Apartamento", finalidade: "Venda",
      cidade: "São José do Rio Preto", bairro: "Jardim Tarraf II",
      preco: null, precoNota: "Consulte o valor",
      quartos: 1, banheiros: 1, vagas: 1, area: 33, areaTerreno: null,
      destaques: ["Sacada com vista", "Cozinha planejada", "Lazer completo com academia", "Mini market no condomínio", "Portaria 24h"],
      descricao: "Apartamento studio no Duo JK, Zona Sul de Rio Preto. 1 quarto, banheiro com box e gabinete, cozinha com armários planejados e sacada com vista aberta. 1 vaga de garagem. Condomínio com área de lazer completa incluindo academia e mini market, portaria 24 horas. Próximo à Unirp e a comércios locais.",
      fotos: 27, capa: 16, videos: []
    },
    {
      id: "rancho-rio-grande", codigo: "LB-003",
      titulo: "Rancho mobiliado no Condomínio Rio Grande",
      tipo: "Rancho", finalidade: "Venda",
      cidade: "Região de São José do Rio Preto", bairro: "Condomínio Rio Grande",
      preco: null, precoNota: "Consulte o valor",
      quartos: 4, banheiros: null, vagas: null, area: 200, areaTerreno: 500,
      destaques: ["Próximo à portaria, acesso todo no asfalto", "Piscina 3 × 5 m", "Churrasqueira de alvenaria", "Todo mobiliado, acomoda 16 pessoas", "Ar-condicionado nos quartos do térreo"],
      descricao: "Rancho no Condomínio Rio Grande, próximo à portaria e com acesso todo no asfalto. Terreno de 500 m² com 200 m² de construção. No térreo, 2 quartos tipo apartamento (5 × 4 m) com banheiro; no superior, mais 2 quartos com varanda voltada para a mata. Despensa com tanque, pia para limpar peixe e banheiro de apoio à piscina (3 × 5 × 1,20 m). Cozinha de 7 × 5 m integrada à área de churrasqueira (7 × 4 m) com churrasqueira de alvenaria e bancada. Pés de jabuticaba, pitanga e pinha produzindo, dois coqueiros e 10 árvores na calçada. Todo mobiliado, ar de 12.000 BTUs nos quartos do térreo e acomodação para 16 pessoas.",
      fotos: 24, capa: 7, videos: []
    },
    {
      id: "sitio-sao-joao", codigo: "LB-004",
      titulo: "Sítio São João — açaí, seringueira e indústria aprovada",
      tipo: "Sítio", finalidade: "Venda",
      cidade: "São José do Rio Preto", bairro: "Zona rural, frente para rodovia",
      preco: 20000000, precoNota: "",
      quartos: null, banheiros: null, vagas: null, area: null, areaTerreno: null, alqueires: 23.76,
      destaques: ["23,76 alqueires com ~350 m de frente para rodovia", "2.400 touceiras de açaí produzindo + 1.800 novas", "Indústria de sorbet aprovada pelos órgãos públicos", "10.000 mognos e 4.500 cedros australianos", "Poço de 160 m — 60.000 L/h"],
      descricao: "Propriedade produtiva de 23,76 alqueires com cerca de 350 m de frente para a rodovia.\n\nAçaí: cerca de 2.400 touceiras já produzindo em 5 hectares e mais 1.800 touceiras em outros 5 hectares, com início de produção previsto em 2 anos. Viveiro próprio para produção de mudas.\n\nIndústria: fábrica de sorbet de açaí aprovada pelos órgãos públicos de Rio Preto; requer cerca de R$ 1 milhão de investimento para finalizar. Capacidade estimada pelo proprietário de 10.000 caixas de 10 kg/mês com 2 linhas.\n\nSeringueira, mogno e cedro: cerca de 14 alqueires plantados. Estimativa do proprietário de 78.000 kg de látex na próxima safra (60% do proprietário), entregue à Cooperativa de Guapiaçu. 10.000 mognos brasileiros (~800 m³ de madeira serrada) e 4.500 cedros australianos (~1.000 m³), com corte já aprovado pelos órgãos ambientais.\n\nInfraestrutura: poço de 160 m de profundidade com capacidade de 60.000 L/h (uso atual de 45.000 L/h).\n\nEstimativas de produção e receita informadas pelo proprietário (nov/2024) — solicite os documentos.",
      fotos: 8, capa: 2, videos: ["video1"]
    }
  ]
};
