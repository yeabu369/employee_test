<div align="center">

Simple Todos

### A simple single page todos app

</div>

#### Folder structure

```sh


todos-expressjs-server/    contains the express js server code
└── src
    ├── config          # Express, log and dummy array database configurations
    ├── middleware      # Middleware for handling api errors
    ├── modules
    |   └── todos       # todos module / this is the folder you need to modify /
    ├── tests           # Tests for todo module controller and dal
    ├── utils           # contains wrapper functions that facilitate sending and
    └── index.ts        # Worker server (search indexing; syncing with Algolia)




todos-nextjs-app/       contains the next js server app code
└── src
    ├── components      # react components
    ├── pages           # contains next js index page and api
    |   └── api         # api to reroute calls and avoid cors errors
    ├── public          # Tests for todo module controller and dal
    └── styles          # Worker server (search indexing; syncing with Algolia)


Pro
```

### First time setup

Just clone the repository and run

```sh
npm i
```

in both folders

### Running the app locally for development

To start the server for development purposes you can use

```sh
npm run dev
```

in their respective folder
