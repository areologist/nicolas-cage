# Nicolas Cage

## WT*

This is a basic demonstration of an Angular 1.5 app with ES2015/Babel and
component architecture.

Intentionally absurd to reinforce that this is **not a seed project**.

*Infrastructure for serious app missing, such as proper build system,
tests, a legit data access layer, etc.; to say nothing of ridiculous nature of
the app.*


## Resources

* [Angular 1.5 Components](https://docs.angularjs.org/guide/component)
* [Stateless Components](https://toddmotto.com/stateless-angular-components)
* [Babel](https://babeljs.io)
* [Webpack](https://webpack.github.io)


## Notes

### The Structure of a Component

Angular 1.5 introduces the `.component` method on `module` which simplifies
the creation of components which previously had to be done with `.directive`.
This is the typical pattern:

```
thing/
  thing.component.js
  thing.html
  thing.js
  thing.{less/scss/styl/css}
  thing.controller.js
  thing.spec.js
```

*Simple components may not have a controller or a spec.*

See `client/app/components/` for examples.

### About Project Structure

For small projects the structure used here seems to work well.

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

But for larger, growing projects a variant structure similar to the following
has worked well for me.

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

Where each functional area or feature of the application gets its own
`components/` and `common/` directories (i.e., resources shared between
components within that area), with a root `shared/` for cross-cutting
concerns.
