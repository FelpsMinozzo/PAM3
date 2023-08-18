import logo from '../../assets/logo.png';

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cesta = {

  topo: {
    titulo: "Câmeras DSLR",
  },
  detalhes: {
    nome: "Canon T7i + Lente 35mm",
    logoFazenda: logo,
    nomeFazenda: "Joe's Cameras",
    descricao: "Sucessora da T7i, o novo modelo traz novas funcionalidades e melhorias espetaculares que todo o fotógrafo precisa.",
    preco: "R$ 5.000,00",
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens da Loja do Zé (Joe)",
    lista: [
      {
        nome: "Lente 50mm Yongnuo F/1.8",
        imagem: tomate,
      },
      {
        nome: "Canon T2i (Corpo)",
        imagem: brocolis,
      },
      {
        nome: "Filtro ND (Nikon)",
        imagem: batata,
      },
      {
        nome: "Bateria ENL-8",
        imagem: pepino,
      },
      {
        nome: "Bolsa Canon",
        imagem: abobora,
      }
    ]
  }
}

export default cesta;