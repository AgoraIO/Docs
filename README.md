<div align="center">
  <img width="200" src="https://www.agora.io/en/wp-content/themes/agora-mar-24-2022-b/images/agora-logo.svg" alt="Agora Brand Logo">
  <h1>Agora Documentation Website</h1>
</div>

Agora documentation website uses [Docusaurus](https://docusaurus.io/) to generate the static documentation website. It also uses MDX and React as the frontend framework. The actual contents of the website (in MDX) lives in a git submodule [repository](https://github.com/AgoraIO/Docs-Source).

## Prerequisites

In order to build the Agora documentation using this repo you must have to have installed [Nodejs](https://nodejs.org/en/download/) >= `16.8.0` on your system.

## Run the Website

- Clone the repository using your terminal:

```bash
  git clone https://github.com/AgoraIO/Docs.git
```

- In Terminal, navigate to the root folder of this repository.Initiate the submodules:

```bash
cd Docs
git submodule sync --recursive
git submodule update --init --remote --recursive
git pull --recurse-submodules
```

- **Installation**

```bash
yarn
```

- **Local Development**

```bash
yarn start
```

- **Build**

```bash
yarn build
```
