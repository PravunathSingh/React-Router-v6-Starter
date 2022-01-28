## React-Router v6 Starter Template

This repo consists of code for people who are new to react or people who have been working on react previously but haven't been able to catch up to the latest update of react-router.

The Purpose of this repo is the give an idea of how routing works in React and what are the changes that came up with React-Router v6

### Steps to install the project and get started with it.

- Clone the repo
- run `npm install`
- run `npm start`

### Key Points To Remember:

- With v6 the "Switch" component has been replaced to the "Routes" component. So the final code will be something like:

```
<Router>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='*' element={<Error404 />} />
  </Routes>
</Router>

```

- We can see the "component" attribute in "Route" has changed to "element"

There have been lot other changes, so it is highly recommended to check the official documentation for v6.0

#### This repo is just to give people a starting point with React-Router v6.
