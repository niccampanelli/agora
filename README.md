<img alt="Logo do Agora" src="https://github.com/niccampanelli/agora/blob/master/assets/agora_extended_logo.png" width="100%" align="center" />

#  AGORA - Aplicativo de Gerenciamento e Organização do Atendimento.
Feito por [Nicholas Campanelli de Souza](https://github.com/niccampanelli), [Rafael da Silva Rodrigues](https://github.com/rafael2801).

___

[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)

## Introdução

O AGORA Foi criado para pacientes usuários do sistema público de sáude tendo em vista a redução do tempo de espera em longas e demoradas filas para a realização de consultas e exames.

## Telas do App
<div width="100%">
<img alt="Logo do Agora" src="https://github.com/niccampanelli/agora/blob/master/assets/Screenshot_20210317-054514.png" width="24.5%"/>
<img alt="Logo do Agora" src="https://github.com/niccampanelli/agora/blob/master/assets/Screenshot_20210317-054524.png" width="24.5%"/>
<img alt="Logo do Agora" src="https://github.com/niccampanelli/agora/blob/master/assets/Screenshot_20210317-054552.png" width="24.5%"/>
<img alt="Logo do Agora" src="https://github.com/niccampanelli/agora/blob/master/assets/Screenshot_20210317-054643.png" width="24.5%"/>
</div>

## Primeiros Passos

Primeiros passos para a instalação e utilização do AGORA.

### Usar a Versão Final do AGORA

Para tornar o AGORA acessível e disponível para todas as pessoas, foi utilizado o serviço de hospedagem em núvem do Heroku. Lá foi hospedado o Dashboard (o painel de controle) para as unidades de saúde, onde é possível ter acesso total às consultas marcadas, receitas prescritas, médicos cadastrados e outras funcionalidades da plataforma. É por este Dashboard que as unidades irão marcar consultas e controlá-las.

- O primeiro acesso requer a criação de uma conta, portanto será necessário fornecer algumas informações básicas sobre a sua unidade de saúde.
![Tela de Cadastro da Unidade](https://user-images.githubusercontent.com/56810073/113474532-e07f6900-9446-11eb-83ee-908abc8fbea8.png)

- Se sua unidade já tiver acessado a plataforma antes e já for cadastrada, o acesso neste cadastro é simples, necessitando apenas do endereço de email especificado na hora do cadastro, e da senha.
![Tela de Login](https://user-images.githubusercontent.com/56810073/113474595-305e3000-9447-11eb-9b0c-887434766fea.png)

### Instalação do Repositório Clonado

Se você quiser ver na prática como o AGORA funciona, clone este repositório e instale-o usando o npm de acordo com o passo a passo a seguir:

#### Requisitos

É necessário para instalar o repositório do AGORA:

- A ultima versão do NPM instalado em sua máquina. 
- A ultima versão do Expo instalado em sua máquina.
- Um celular com Android ou IOS.
- O aplicativo Expo Go instalado em seu celular.
- Clone este repositório em um diretório em sua máquina.
```bash
git clone https://github.com/niccampanelli/agora.git
```
- Mude o diretório para a pasta do projeto
```bash
cd ./agora
```
- Entre primeiramente na pasta "backend"
```bash
cd ./backend
```
- Execute o comando de instalação do npm
```bash
npm install
```
- Mude seu diretório para a pasta "frontend"
```bash
cd ..
cd ./frontend
```
- Execute novamente o comando de instalação do npm
```bash
npm install
```
- Agora, execute o comando para iniciar os servidores locais em sua máquina
  - Primeiramente na pasta backend
  ```bash
  cd ..
  cd ./backend
  npm start
  ```
  - Depois na pasta frontend
  ```bash
  cd ..
  cd ./frontend
  npm start
  ```
- Em seu navegador, irá aparecer uma nova janela do Expo.
- No seu celular, abra o app Expo Go
- Leia com o Expo Go, o QR Code que é mostrado na janela do navegador.
