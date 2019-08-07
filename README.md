### Usage

```sh
yarn start

https://sad-easley-81f59e.netlify.com
```

## Structure

- **/components** This folder contains Reusable UI presentational components so they contain the styling files where I used BEM methodology for class naming convention to introduce custom components and to override Ant-design default styles where needed.

- **/containers** Here is where things starts to get a little bit interesting, a container may has tow files:

  - _Container file_ :
    No thing new here, This where components connects to redux.

  - _Redux file_ : Here I am following "ducks-modular-redux" proposal to group all redux stuff in one file. I really do like this approach because it keeps everything in one place which makes things easier when debugging.

* **/api** This where I configure axios client and define the different http methods for each model in an organized and modular way. However for this task I only defined one http method that fetches repo data but if we have a huge application with many models this apporach will come really handy.

### Improvements

Things that I would improve if I had more time:

- **Testing**: due to lack of time I was not able to test everything thoroughly and I was only able to test some components, reducers and actions Using Jest & Enzyme.

- **Type-checking**: I used flow to define the types of data that are passed into the components, But I did not cover all of the code but I made sure to cover the more important parts. also I used Object type in some parts which I would not do when it comes to real world projects.

- **UI / UX**: I tried to make the layout responsive and improve the overall user experince on different screen sizes but there is still plenty of things that can be done to make it even better.
