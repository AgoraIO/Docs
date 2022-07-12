<div align="center">
  <img width="200" src="https://www.agora.io/en/wp-content/themes/agora-mar-24-2022-b/images/agora-logo.svg" alt="Agora Brand Logo">
  <h1>Agora Documentation Website</h1>
</div>

Agora documentation website uses Hugo and Docsy (theme built for Hugo) to generate the static documentation website. It also uses Nodejs as the CLI to automate development build process. The static website containing Agora documentation from external Asciidoc and Markdown source files.

## Prerequisites

In order to build the Agora documentation using this repo you must have to have installed [Nodejs](https://nodejs.org/en/download/) >= `15.1.0` on your system.

## Run the Website

- Clone the repository using your terminal:

```bash
  git clone https://github.com/AgoraIO/Docs.git
```

- In Terminal, navigate to the root folder of this repository.Initiate the submodules:

```bash
cd Docs
git submodule init
git submodule update
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
