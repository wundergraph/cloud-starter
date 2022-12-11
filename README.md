# Simple starter for WunderGraph Cloud

A simple starter that consumes the [GraphQL SpaceX API](https://spacex-api.fly.dev/graphql/).

### Getting started locally

```shell
npm install && npm start
```

Get SpaceX Dragons

```shell
curl -X GET http://localhost:9991/operations/Dragons
```

---

### Deploy to WunderGraph Cloud

1. Fork this repo
2. Sign in to [WunderGraph Cloud](https://cloud.wundergraph.com)
3. Create a new project
4. Import the forked repo
5. Deploy the project

Try it out (replace `YOUR_PROJECT_ID` with your project id):

```shell
curl -X GET https://{YOUR_PROJECT_NAME}.wundergraph.dev/operations/Dragons
```

### Make changes

1. Make changes to the `main` branch, e.g. change the query in `.wundergraph/operations/Dragons.graphql`
2. Commit and push the changes

See your changes live in less than 20 seconds.

```shell
curl -X GET https://{YOUR_PROJECT_NAME}.wundergraph.dev/operations/Dragons
```

---

### Learn More

Read the [Docs](https://wundergraph.com/docs).
