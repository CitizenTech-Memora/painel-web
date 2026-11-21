<div align="center">

# 💊 Memora · Painel do Cuidador

**Onde a família acompanha de longe se a pessoa idosa tomou o remédio de cada horário**

Status das doses do dia, alertas com fila de avisos para a rede de cuidado, lembrete de voz e adesão semanal, num painel web pensado para o celular.

[![Acessar o painel](https://img.shields.io/badge/Vercel-Acessar%20o%20painel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://memora-painel.vercel.app)

![React](https://img.shields.io/badge/React%2019-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%20v4-0F172A?style=flat-square&logo=tailwindcss&logoColor=38BDF8)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)

<sub>Web Development e Front-end Design · Global Solution 2026.2 · CitizenTech · FIAP</sub>

</div>

---

## Sobre o projeto

Para quem cuida de alguém com Alzheimer, uma das perguntas mais repetidas do dia é: *"será que ela tomou o remédio?"*. A pessoa idosa nem sempre lembra se já tomou, e a família, muitas vezes longe, fica sem ter certeza.

O **Memora** nasceu para responder a essa pergunta. A solução completa reúne uma caixa de remédios inteligente, que lembra a pessoa na hora certa, e as ferramentas em que a família acompanha o que aconteceu com cada dose.

Este repositório traz o **Painel do Cuidador**, uma aplicação web feita em React. Ele foi pensado para o familiar que abre o painel no celular, com pressa, entre uma tarefa e outra. Em poucos segundos, mostra se o remédio de cada horário saiu da caixa. Também avisa quando uma dose atrasa, quando alguém tenta abrir a caixa fora de hora ou quando o local fica quente demais para os remédios. Se ninguém vê o aviso em 10 minutos, ele passa para a próxima pessoa da rede de cuidado.

O objetivo é simples: trocar a dúvida por informação, para que a família saiba quando está tudo bem e perceba rápido quando algo precisa de atenção.

> **Importante:** o Memora é um **apoio ao cuidado** e não substitui o cuidador, o médico ou o farmacêutico. Pessoas e telefones do projeto são **fictícios**. Remédios e horários são **exemplos**, não são prescrição.

---

## Como o painel funciona

O cuidador cadastra os remédios (com horários, estoque e temperatura máxima) e a rede de cuidado, ou seja, quem recebe os avisos e em que ordem. A partir daí, o painel acompanha os eventos que a caixa envia e mostra a situação de cada dose:

| Status | Quando acontece | Cor no painel |
|---|---|---|
| **Prevista** | O horário da dose ainda não chegou | Neutra |
| **É a hora** | Até 10 min depois do horário | 🔵 Azul |
| **Lembrete** | De 10 a 20 min sem retirada (a caixa toca o lembrete de voz de novo) | 🔵 Azul |
| **Atrasada** | Mais de 20 min sem retirada | 🟡 Âmbar |
| **Tudo certo** | O remédio saiu da caixa | 🟢 Verde |

Cada dose também aparece com a cor do compartimento da caixa física: 🟡 amarelo (manhã), 🟠 laranja (tarde) e 🔵 azul (noite).

**Alertas e fila de avisos:** dose atrasada, tentativa de abrir a caixa fora de hora e temperatura acima do limite do remédio geram um alerta. O aviso vai para a primeira pessoa da rede de cuidado e, se ninguém clicar em **"Vi o aviso"** em 10 minutos, passa para a próxima da fila.

**Simulação:** como não há uma caixa real ligada ao painel, a tela **Hoje** tem uma área para simular os eventos (retirada, atraso, tentativa fora de hora e temperatura alta) e ver como o painel reage.

> **Importante:** a caixa registra a *retirada* do remédio, não confirma que ele foi ingerido.

---

## Telas do painel

| Tela | Para que serve |
|---|---|
| **Hoje** | Responde à pergunta "ela tomou o remédio?": status da caixa, doses do dia, aviso de reposição, banner de alertas pendentes e a área de simulação. |
| **Remédios** | Cadastro, consulta, edição e exclusão de remédios, com dosagem, cor, horários, estoque e temperatura máxima. Avisa quando o estoque dura 7 dias ou menos. |
| **Rede de cuidado** | Cadastro, consulta, edição e exclusão dos contatos, em ordem de prioridade para receber os avisos. |
| **Lembrete de voz** | Grava, pelo microfone do navegador, a mensagem de até 15 segundos que a caixa toca na hora de cada dose. |
| **Histórico** | Taxa de adesão da semana (% de doses retiradas no horário), resultado de cada dia, doses perdidas, tentativas fora de hora e tempo médio de resposta aos alertas. |
| **Alertas** | Avisos que precisam de atenção, quem está sendo avisado agora e o botão "Vi o aviso". |

---

## Design e acessibilidade

- **Mobile-first:** o layout é feito primeiro para o celular. No computador, o menu vai para a lateral e o conteúdo ganha largura máxima, para a leitura não cansar.
- **Cores com significado:** verde-pinho calmo como base, verde para "tudo certo", azul para "acontecendo agora" e âmbar para "precisa de você". Não há vermelho: o cuidador já vive preocupado, e o alerta se destaca justamente porque o resto da tela é calmo.
- **Cor nunca sozinha:** todo status também é escrito em texto, para quem não distingue cores e para leitores de tela.
- **Texto legível:** fonte Atkinson Hyperlegible, criada para pessoas com baixa visão. Texto do corpo em 18px e nada abaixo de 16px.
- **Contraste:** textos com contraste de 5,8:1 ou mais (o mínimo da WCAG é 4,5:1) e bordas dos campos com 3,3:1 ou mais (o mínimo é 3:1).
- **Toque fácil:** botões com no mínimo 48px de altura. No celular, a ação principal fica embaixo, perto do polegar.
- **Proteção contra erros:** excluir é o botão menos chamativo e sempre pede confirmação.
- **Leitores de tela:** menu com `aria-current`, status com `role="status"`, erros com `role="alert"`, textos de apoio com `sr-only` e elementos decorativos com `aria-hidden`.
- **Movimento reduzido:** as animações só rodam se a pessoa não pediu "reduzir movimento" no sistema (`motion-safe:`).
- **Foco visível** para quem navega pelo teclado.

---

## Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20.19 ou superior (ou 22.12+)
  Verifique com: `node --version`
- npm (vem junto com o Node)

### Pelo terminal

```bash
# Clone o repositório
git clone https://github.com/CitizenTech-Memora/painel-web.git

# Entre na pasta
cd painel-web

# Instale as dependências
npm install

# Crie o arquivo .env a partir do exemplo
cp .env.example .env      # Linux / Mac
copy .env.example .env    # Windows

# Execute
npm run dev
```

Abra http://localhost:5173 no navegador.

<details>
<summary><b>Pelo VS Code</b></summary>

1. Abra o VS Code e clique em **File > Open Folder**
2. Selecione a pasta do projeto (painel-web)
3. Abra o terminal integrado em **Terminal > New Terminal**
4. Rode `npm install`
5. Crie o `.env` copiando o `.env.example` (comandos acima)
6. Rode `npm run dev` e abra o endereço que aparecer no terminal

</details>

> **Atenção:** sem o `.env`, o painel não sabe onde buscar os dados e a tela fica em branco. Se você criar o `.env` com o servidor já rodando, pare com `Ctrl + C` e rode `npm run dev` de novo, porque o Vite só lê o `.env` quando liga.

### Dados de exemplo (opcional)

Para começar com dados fictícios (3 remédios, 3 contatos e os eventos dos últimos 8 dias):

```bash
npm run seed
```

> **Atenção:** o seed **apaga tudo** o que estiver nos resources `remedios`, `contatos` e `eventos` antes de cadastrar os dados de exemplo. Como a MockAPI é a mesma do projeto, os dados também mudam no site publicado.

### Outros comandos

| Comando | Função |
|---|---|
| `npm run dev` | Inicia o painel em modo de desenvolvimento |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Abre a versão de produção localmente |
| `npm run lint` | Confere o código com o oxlint |
| `npm run seed` | Recria os dados de exemplo na MockAPI |

---

## Estrutura

```
painel-web/
├── public/
│   └── favicon.svg          ← Ícone do site
├── scripts/
│   └── seed.js              ← Dados fictícios para a MockAPI
├── src/                     ← Código-fonte do painel
├── .env.example             ← URLs da MockAPI
├── index.html               ← Página base e fonte Atkinson Hyperlegible
├── vite.config.js           ← Configuração do Vite com React e Tailwind
├── vercel.json              ← Redirecionamento das rotas na Vercel
├── package.json             ← Dependências e comandos
├── AI.md                    ← Uso de inteligência artificial no projeto
└── README.md                ← Este arquivo
```

## Organização interna do código

<details>
<summary><b>Ver as pastas de <code>src/</code></b></summary>

A lógica de negócio e o acesso aos dados ficam separados dos componentes que desenham a tela.

```
src/
│
├── main.jsx ← ponto de entrada, com o BrowserRouter
├── App.jsx ← layout (menu + conteúdo) e as 6 rotas
├── index.css ← Tailwind: cores, fonte e classes reutilizáveis do Memora
│
├── pages/ ← uma tela por rota
│   ├── Hoje.jsx
│   ├── Remedios.jsx
│   ├── RedeCuidado.jsx
│   ├── LembreteVoz.jsx
│   ├── Historico.jsx
│   └── Alertas.jsx
│
├── components/ ← 17 componentes visuais reutilizáveis
│   ├── Header, NavMenu ← cabeçalho e menu de navegação
│   ├── StatusCaixa, CardDose, AlertaBanner, AvisoReposicao, SimuladorEventos ← tela Hoje
│   ├── ListaRemedios, FormRemedio ← remédios
│   ├── ListaContatos, FormContato ← rede de cuidado
│   ├── GravadorVoz, CalendarioAdesao, CardAlerta ← lembrete, histórico e alertas
│   └── Carregando, MensagemErro, ConfirmDialog ← usados em todas as telas
│
├── hooks/ ← custom hooks com o estado e a lógica
│   ├── useRemedios, useContatos, useEventos ← CRUD na MockAPI
│   ├── useDosesDeHoje, useAlertas, useAdesao ← status das doses, alertas e adesão
│   ├── useSimulador ← cria os eventos da simulação
│   ├── useGravadorVoz ← gravação com a API MediaRecorder
│   └── useAgora ← relógio que atualiza a tela a cada minuto
│
├── services/ ← acesso à MockAPI com Axios
│   ├── api.js
│   ├── remediosService.js
│   ├── contatosService.js
│   └── eventosService.js
│
├── utils/ ← regras de negócio em funções puras
│   ├── regrasDose.js ← status da dose, compartimento e temperatura
│   ├── cascata.js ← fila de avisos da rede de cuidado
│   ├── adesao.js ← taxa de adesão e números do histórico
│   ├── reposicao.js ← dias até o remédio acabar
│   ├── validacoes.js, formularios.js ← validação e conversão dos formulários
│   └── datas.js, eventos.js ← datas, horários e montagem de eventos
│
├── constants/ ← tipos de evento, compartimentos e tempos (10 min, 20 min, 30 °C...)
└── config/ ← dados da pessoa acompanhada
```

</details>

## Persistência de dados

O painel usa a **MockAPI.io** como API externa, com o Axios. As URLs já vêm no `.env.example`, então não é preciso criar conta nem mudar nada:

- **`VITE_API_URL`:** guarda os resources `remedios` e `contatos`, com criar, consultar, editar e excluir.
- **`VITE_API_URL_EVENTOS`:** guarda o resource `eventos` (retiradas, atrasos, tentativas fora de hora e temperatura). Ele fica em outro projeto da MockAPI porque o plano grátis permite só 2 resources por projeto.

Os **lembretes de voz** ficam guardados só no navegador (no `localStorage`), não na MockAPI. Por isso, eles não aparecem em outro computador ou em outro navegador. Na caixa real, o áudio seria enviado para o dispositivo pela parte de Edge do projeto.

---

## Limitações desta versão

O Painel do Cuidador é um **protótipo acadêmico**. Nesta versão:

- Não existe comunicação com a caixa física ou com o ESP32. Os eventos são criados pela área de simulação.
- O painel mostra quem está sendo avisado, mas não envia mensagens de WhatsApp de verdade.
- A MockAPI é compartilhada e não tem login: qualquer pessoa com o painel aberto vê e altera os mesmos dados.
- Os lembretes de voz ficam só no navegador em que foram gravados.
- O sistema não confirma a ingestão do medicamento e não substitui acompanhamento médico.

## Tecnologias utilizadas

- **React 19 com Vite:** interface e ambiente de desenvolvimento.
- **React Router:** navegação entre as 6 telas.
- **Axios:** chamadas à API.
- **MockAPI.io:** API externa com o CRUD de remédios, contatos e eventos.
- **Tailwind CSS v4:** estilização, com o plugin `@tailwindcss/vite`.
- **Atkinson Hyperlegible (Google Fonts):** fonte para baixa visão.
- **MediaRecorder e localStorage:** gravação e armazenamento dos lembretes de voz.
- **oxlint:** conferência do código.
- **Vercel:** publicação do painel.

## Uso de IA

O uso de IA no painel está documentado no arquivo [AI.md](AI.md): ferramentas usadas, o que foi gerado e como o grupo validou e ajustou cada resultado.

## Equipe

| Nome | RM |
|---|---|
| Eric Kang | 572575 |
| Guilherme Tomé Nogueira | 570144 |
| Lucas de Andrade Astorini | 569119 |
| Sabrina Lopes da Silva | 571870 |
| Sofia Satomi Hagio | 569120 |
