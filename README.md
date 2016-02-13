# Nicolas Cage

http://api.giphy.com/v1/gifs/search?q=nicolas+cage&api_key=dc6zaTOxFJmzC

With thanks to the [Open Movie Database](http://www.omdbapi.com/) and
the [Giphy API](https://github.com/Giphy/GiphyAPI).

## But what is this?

This repo is a simple demonstration of Angular 1.x with ES2015 and
component architecture.

### What if my project is bigger?

For small projects this structure seems to work well:

```
app/
  components/
    home/
      home.js
      etc..
    about/
    common/
  shared/
  app.js
  etc...
```

But for larger, growing projects the following basic structure has worked well for me:

```
app/
  areaone/
    components/
      something/
        something.js
        etc..
      something-more/
    common/
  areatwo/
    components/
    common/
      etc..
  shared/
  app.js
  etc..
```

Where each functional area or feature of the application gets its own `components/` and `common/` directories (i.e., resources shared between components within that area), with a root `shared/` for cross-cutting concerns.
