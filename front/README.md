# Hotel Front End
 This is a React JS Front End for hotel's RESTful API.
# Getting Started

- Clone the repository

```shell
    git clone https://github.com/joaquinicolas/almundo-challenge.git
    cd almundo-challenge/front
```

# Install dependecies

We'll install the project dependencies

```shell
    yarn install
```

# Running the project

Once we have installed the dependecies we're ready to run the project, for this run:

```sh
yarn start
```

The server runs at `http://localhost:3000`, but should be automatically opened for you.

# Creating a production build

To run a production build, just run

```sh
npm run build
```

This will create an optimized JS and CSS build in `./build/static/js` and `./build/static/css` respectively.

# Running a server with optimized JS and CSS
``` sh
     npm i -g pushstate-server
     pushstate-server build
```
Now open `http://127.0.0.1:9000`