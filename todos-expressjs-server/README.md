This folder contains the express server code for the todos app

todos-expressjs-server/
└── src
    ├── config          # Express, log and dummy array database configurations
    ├── middleware      # Middleware for handling api errors
    ├── modules
    |   └── todos       # todos module / this is the folder you need to modify /
    ├── tests           # Tests for todo module controller and dal
    ├── utils           # contains wrapper functions that facilitate sending and
    └── index.ts        # Worker server (search indexing; syncing with Algolia)