# Examples

## Counter Vanilla

Run the Counter Vanilla example:
```
cd redux/examples/counter-vanilla
open index.html
```

It does not require a build system or a view framework and exists to show the raw Redux API used with ES5.

## Counter

Run the Counter example:

```
cd redux/examples/counter
npm install
npm start

open http://localhost:3000/
```

This is the most basic example of using Redux together with React. For simplicity, it re-renders the React component manually when the store changes. In real projects, you will likely want to use the highly performant React Redux bindings instead.

This example includes tests.

## Todos

Run the Todos example:

```
cd redux/examples/todos
npm install
npm start

open http://localhost:3000/
```

This is the best example to get a deeper understanding of how the state updates work together with components in Redux. It shows how reducers can delegate handling actions to other reducers, and how you can use React Redux to generate container components from your presentational components.

This example includes tests.

## Todos with Undo

Run the Todos with Undo example:

```
cd redux/examples/todos-with-undo
npm install
npm start

open http://localhost:3000/
```

This is a variation on the previous example. It is almost identical, but additionally shows how wrapping your reducer with Redux Undo lets you add a Undo/Redo functionality to your app with a few lines of code.

## TodoMVC

Run the TodoMVC example:

```
cd redux/examples/todomvc
npm install
npm start

open http://localhost:3000/
```

This is the classical TodoMVC example. It’s here for the sake of comparison, but it covers the same points as the Todos example.

This example includes tests.

## Shopping Cart

Run the Shopping Cart example:

```
cd redux/examples/shopping-cart
npm install
npm start

open http://localhost:3000/
```

This example shows important idiomatic Redux patterns that become important as your app grows. In particular, it shows how to store entities in a normalized way by their IDs, how to compose reducers on several levels, and how to define selectors alongside the reducers so the knowledge about the state shape is encapsulated. It also demonstrates logging with Redux Logger and conditional dispatching of actions with Redux Thunk middleware.

## Tree View

Run the Tree View example:

```
cd redux/examples/tree-view
npm install
npm start

open http://localhost:3000/
```

This example demonstrates rendering a deeply nested tree view and representing its state in a normalized form so it is easy to update from reducers. Good rendering performance is achieved by the container components granularly subscribing only to the tree nodes that they render.

This example includes tests.

## Async

Run the Async example:

```
cd redux/examples/async
npm install
npm start

open http://localhost:3000/
```

This example includes reading from an asynchronous API, fetching data in response to user input, showing loading indicators, caching the response, and invalidating the cache. It uses Redux Thunk middleware to encapsulate asynchronous side effects.

## Universal

Run the Universal example:

```
cd redux/examples/universal
npm install
npm start

open http://localhost:3000/
```

This is a basic demonstration of server rendering with Redux and React. It shows how to prepare the initial store state on the server, and pass it down to the client so the client store can boot up from an existing state.

## Real World

Run the Real World example:

```
cd redux/examples/real-world
npm install
npm start

open http://localhost:3000/
```

This is the most advanced example. It is dense by design. It covers keeping fetched entities in a normalized cache, implementing a custom middleware for API calls, rendering partially loaded data, pagination, caching responses, displaying error messages, and routing. Additionally, it includes Redux DevTools.