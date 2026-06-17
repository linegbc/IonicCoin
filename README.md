# IonicCoin

**IonicCoin** é um aplicativo móvel responsivo de conversão de moedas em tempo real desenvolvido com o framework **Ionic** e **Angular**, utilizando a linguagem **TypeScript**. O projeto foi construído seguindo a arquitetura moderna de **Standalone Components** do Angular, garantindo um código limpo, modular e de fácil manutenção.

O objetivo principal da aplicação é permitir que os usuários consultem taxas de câmbio atualizadas e realizem conversões entre diferentes moedas globais de forma rápida, mesmo em cenários de instabilidade de rede ou sem acesso à internet.

---

## Funcionalidades Principais

* **Integração com API REST**: Consumo de dados em tempo real da *ExchangeRate-API* para obter taxas de câmbio de uma ampla variedade de moedas internacionais (como USD, EUR, BRL).
* **Interface Responsiva**: Design limpo e intuitivo que se adapta automaticamente a diferentes tamanhos de tela (computadores, tablets e celulares) utilizando componentes nativos do Ionic.
* **Atualização Automática**: As taxas de câmbio são atualizadas automaticamente a cada nova consulta ou ao abrir o aplicativo.
* **Conversão Inversa**: Permite inverter instantaneamente as moedas de origem e destino com apenas um toque na interface.
* **Histórico de Conversões**: Armazenamento local das conversões recentes no dispositivo utilizando `Local Storage`, permitindo acesso rápido em uma tela dedicada.
* **Suporte Offline**: Caso o usuário esteja offline, o aplicativo utiliza as últimas taxas salvas localmente para realizar as conversões com base nos dados mais recentes disponíveis.

---

## Demonstração do Aplicativo

> **Nota para Avaliação:** Abaixo estão as capturas de tela das principais interfaces do sistema, conforme exigido pelos critérios de documentação do projeto.

### 1. Tela de Conversão Principal (Home)
*Interface principal onde o usuário insere os valores e seleciona as moedas de origem e destino.*
![Tela Principal](./Imagens/Captura%20de%20tela%202026-06-16%201.png)

### 2. Resultado da Conversão e Inversão de Moedas
*Demonstração do cálculo realizado em tempo real e o funcionamento do botão de inversão rápida.*
![Resultado da Conversão](./Imagens/Captura%20de%20tela%202026-06-16%202.png)

### 3. Tela Dedicada ao Histórico Local
*Lista de conversões salvas localmente no dispositivo para consulta offline, sem necessidade de nova requisição à API.*
![Histórico Vazio](./Imagens/Captura%20de%20tela%202026-06-16%203.png)
![Histórico Salvo](./Imagens/Captura%20de%20tela%202026-06-16%204.png)

---

## Especificações Técnicas

* **Framework Base**: Ionic Framework (v7+) com Angular (v18+)
* **Arquitetura**: Standalone Components (Componentes Independentes)
* **Linguagem**: TypeScript
* **Consumo de API**: HttpClient do Angular (Requisições REST)
* **Persistência Local**: Local Storage (Web Storage API)
* **Provedor de Câmbio**: ExchangeRate-API

---

## Como Executar o Projeto Localmente

Para rodar este projeto em seu ambiente de desenvolvimento local, siga os passos abaixo:

1. **Clone este repositório público:**
   ```bash
   git clone [https://github.com/linegbc/IonicCoin.git](https://github.com/linegbc/IonicCoin.git)
