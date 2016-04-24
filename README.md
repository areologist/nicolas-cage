# Nicolas Cage

*If you dislike emoji commits or the color pink, turn back now...*

## WT*

This is a basic demonstration of an Angular 1.5 app with ES2015/Babel and component structure.

*Infrastructure for serious app missing, such as proper build system,
tests, test runner, a legit data access layer, etc.; to say nothing of
the goofy nature of the app.*

For a legit seed project with similar stack check out
[NG6-starter](https://github.com/AngularClass/NG6-starter)

## Resources

* [Slides from my talk that used snippets from this repo](https://drive.google.com/file/d/0B8MlaW2Dz1EAZ1BtemZBMzRNaDQ/view)
* [Angular 1.5 Components](https://docs.angularjs.org/guide/component)
    * [Awesome AngularJS](https://github.com/gianarb/awesome-angularjs)
* [Babel](https://babeljs.io/)
    * [ES2015 Cheat Sheet](https://github.com/DrkSephy/es6-cheatsheet)
* [Webpack](https://webpack.github.io/)
    * [Beginner Webpack Tutorial](https://github.com/AriaFallah/WebpackTutorial)
    * [Excellent Webpack intro from **Pro React**](http://www.pro-react.com/materials/appendixA/)

## Notes

### The Structure of a Component

Angular 1.5 introduces the `.component` method on `module` which simplifies
the creation of components which previously had to be done with `.directive`.
This is the typical pattern:

```bash
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

```bash
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

```bash
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

## Props

[Giphy API](https://github.com/Giphy/GiphyAPI)

[Open Movie Database](https://www.omdbapi.com)

[Todd Motto](https://toddmotto.com/)

[Scott Moss](https://twitter.com/scotups)


***


## *Post hoc* notes from my *ad hoc* and *ad libitum* presentation...


### Webpack and Modules

See `/webpack.config.js`

[https://github.com/areologist/nicolas-cage/blob/master/webpack.config.js](https://github.com/areologist/nicolas-cage/blob/master/webpack.config.js)

Webpack loaders are setup so that we can use [Babel](https://babeljs.io/) for ES2015+ features, html templates, as well as LESS (or whatever one chooses to use). 

```javascript
module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      { test: /\.less$/, loader: 'style!css!less' },
      {
        test: /\.js$/, loader: 'babel', exclude: [/node_modules/, /\.spec\.js/]
      }
      //...
    ]
  }
};
```

We can now include things like LESS and templates and third-party dependencies with ES2015 module syntax.


In our app entry point, `client/app/app.js`, we include `normalize.css`, `font-awesome`, `angular`, `ui-router`, and `ng-animate`, all of which are loaded from their npm installation locations which webpack is automatically aware of.

Imports that are our custom code begin with `'./'`.

[https://github.com/areologist/nicolas-cage/blob/master/client/app/app.js](https://github.com/areologist/nicolas-cage/blob/master/client/app/app.js)

```javascript
import 'normalize.css';
import 'font-awesome-webpack';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import { appComponent } from './app.component';
import { shared } from './shared/shared';
import { components } from './components/components';

angular.module('app', [
  uiRouter,
  ngAnimate,
  shared.name,
  components.name
])
.component('app', appComponent);
```

**Resources**

* [Recommended beginner webpack tutorial](https://github.com/AriaFallah/WebpackTutorial)
* [**Pro React** appendix A](http://www.pro-react.com/materials/appendixA/)
* [ES2015 module import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)


### Components

Overview of Angular 1.5 components.

[https://docs.angularjs.org/guide/component](https://docs.angularjs.org/guide/component)
> In Angular, a Component is a special kind of directive that uses a simpler configuration which is suitable for a component-based application structure.

> This makes it easier to write an app in a way that's similar to using Web Components or using Angular 2's style of application architecture.

Talked about `module.component()` as opposed to `module.directive()`.

**ng 1.5 components**

Looked at a basic component.

[https://github.com/areolog.../components/common/sticker/sticker.js](https://github.com/areologist/nicolas-cage/blob/master/client/app/components/common/sticker/sticker.js)

```javascript
import angular from 'angular';
import { stickerComponent } from './sticker.component';

export const sticker = angular.module('sticker', [])
  .component('sticker', stickerComponent);
```

[https://github.com/areo.../components/common/sticker/sticker.component.js](https://github.com/areologist/nicolas-cage/blob/master/client/app/components/common/sticker/sticker.component.js)

```javascript
import './sticker.less';
import template from './sticker.html';

export const stickerComponent = {
  template,
  bindings: {
    sticker: '<'
  }
};
```

Discussed object shortcut syntax (e.g., `template` above), the new one-way binding syntax, `<`, and how it works. Forgot the mention the optional binding syntax: `?`.

See [ngdocs](https://docs.angularjs.org/api/ng/service/$compile#-scope-) for details. Todd Mottos's blog was also mentioned, e.g., [this post on one-way bindings](https://toddmotto.com/one-way-data-binding-in-angular-1-5/).

**Component without `.component()`**

Then looked at a more complicated (contrived for demo) example of a component that uses `module.directive()` rather than `module.component()` in order to make use of a link function.

This means that we need to manually specify the component boilerplate that `.component()` setups of automatically.

[https://github.com/ar.../components/common/giph/giph.component.js](https://github.com/areologist/nicolas-cage/blob/master/client/app/components/common/giph/giph.component.js)

```javascript
import './giph.less';
import template from './giph.html';

export const giphComponent = () => {
  // This is our contrived link function to show a component that requires
  // more than module.component() accommodates.
  const giphLink = (scope, element) => {
    const giphUrl = scope.$ctrl.giph.fixedHeight.url;
    const image = new Image();
    const onload = () => {
      const elem = element[0];
      elem.classList.remove('preload');
      elem.querySelector('img').src = giphUrl;
    };
    image.addEventListener('load', onload);
    element.on('$destroy', () => image.removeEventListener('load', onload));
    image.src = giphUrl;
  };

  return {
    template,
    controller() {},
    controllerAs: '$ctrl',
    scope: {
      giph: '<'
    },
    bindToController: true,
    restrict: 'E',
    replace: true,
    link: giphLink
  };
};
```

Namely, we explicitly provide a `controller` (just an ES6 class method in this case), the `controllerAs` alias (adopted the `.component()` default), isolate scope, `scope` rather than `bindings`, `bindToController`, `restrict: 'E'`, and `replace`.


[https://github.com/areol.../components/common/giph/giph.js](https://github.com/areologist/nicolas-cage/blob/master/client/app/components/common/giph/giph.js)

```javascript
import angular from 'angular';
import { giphComponent } from './giph.component';

export const giph = angular.module('giph', [])
  .directive('giph', giphComponent);
```

**Example component with controller**

Mentioned `$onInit()`, which is basically a function that will be called by Angular when everything is ready to go: bindings, requires, etc. First step toward Angular-2-like lifecycle hooks. Here's an example of a component with a simple controller that illustrates.

[https://github.com/are.../app/components/home](https://github.com/areologist/nicolas-cage/tree/master/client/app/components/home)

`home.component.js`

```javascript
import './home.less';
import template from './home.html';
import { HomeController as controller } from './home.controller';

export const homeComponent = {
  template,
  controller
};
```

`home.controller.js`

```javascript
class HomeController {
  constructor(giphyApi) {
    this.giphy = giphyApi;
    this.title = 'Nicolas Cage';
    this.giphs = [];
  }

  $onInit() {
    this.loadGiphs();
  }

  loadGiphs() {
    this.giphy.getRandomized({ limitTo: 4 })
      .then(data => (this.giphs = data));
  }
}

HomeController.$inject = ['giphyApi'];

export { HomeController };
```

**Remarks**

The `HomeController.$inject = ['giphApi'];` line is necessary for minification, which this toy project doesn't do, but there to illustrate.

Again, Todd Motto has a good [blog post talking about $onInit() and the new require syntax](https://toddmotto.com/on-init-require-object-syntax-angular-component/).



### Other

Various other things were talked about. Points of contact with Angular 2 were highlighted. The use of decorators in 1.5 to remove some of the boilerplate was mentioned and we briefly looked at some code just for fun.

Talked about automating new component scaffolding with a gulp task. Shared a basic example project on that:

[https://github.com/areologist/ng1-components](https://github.com/areologist/ng1-components)

I mentioned the AngularClass seed project (NG6) and Frontend Masters course that this is based on.

**Experimental Syntax**

`async/await` came up in passing and so after the meeting I decided to add a little demo of it.

So this is the existing promise-based `getCage()` method on our `giphyApi` service. (Perhaps it seems a little indulgent with the destructuring syntax -- wouldn't necessarily do this style if we were using TypeScript or Flow, but without type annotations it's kinda nice to use options arg with defaults.)

[https://github.com/areo.../app/shared/giphyApi.js](https://github.com/areologist/nicolas-cage/blob/master/client/app/shared/giphyApi.js)

```javascript
  /**
   * Returns a list of Cage giphs based on optional `limitTo` and `offset`
   * properties of optional `options` object.
   */
  const getCage = ({ limitTo = 5, offset = 0 } = {}) => {
    if (!giphyCache.loaded()) {
      return $http.get(buildSearchUrl('nicolas+cage', _cacheSize))
        .then(({ data: { data } }) => {
          giphyCache.load(data);
          return giphyCache.take({ limitTo, offset });
        });
    }
    return $q.when(giphyCache.take({ limitTo, offset }));
  };
  
  /**
   * Returns a randomized set of Cage giphs of max size limitTo.
   */
  const getRandomized = ({ limitTo = 5 } = {}) =>
    getCage({ limitTo: _cacheSize }).then(all => pickRandom(all, limitTo));

```

And this is how it's used in our home controller (`this.giphy` references the injected service):

[https://github.com/areo.../app/components/home/home.controller.js](https://github.com/areologist/nicolas-cage/blob/master/client/app/components/home/home.controller.js)

```javascript
  $onInit() {
    this.loadGiphs();
  }

  loadGiphs() {
    this.giphy.getRandomized({ limitTo: 4 })
      .then(data => (this.giphs = data));
  }
```

And the new `async/await` version that is *purely for demo purposes*.

[https://github.com/areo.../app/shared/giphyApi.js](https://github.com/areologist/nicolas-cage/blob/master/client/app/shared/giphyApi.js)

```javascript
  /**
   * Experimental functions
   *
   * Included to demonstrate async/await function over traditional promise
   * pattern. (Won't work properly in ng 1.x due to digest cycle though.)
   */
  async function getCageAsync({ limitTo = 5, offset = 0 } = {}) {
    if (!giphyCache.loaded()) {
      const url = buildSearchUrl('nicolas+cage', _cacheSize);
      const { data: { data } } = await $http.get(url);
      giphyCache.load(data);
    }
    return giphyCache.take({ limitTo, offset });
  }

  async function getRandom({ limitTo = 5 } = {}) {
    const all = await getCageAsync({ limitTo: _cacheSize });
    return pickRandom(all, limitTo);
  }
```

Which is used on the gallery controller like this:

[https://github.com/areo.../app/components/gallery/gallery.controller.js](https://github.com/areologist/nicolas-cage/blob/master/client/app/components/gallery/gallery.controller.js)

```javascript
  $onInit() {
    this.loadRandom();
  }

  async loadRandom() {
    const data = await this.giphy.getRandom({ limitTo: this.pageSize });
    this.giphs = data;
  }
```

### ESLint

Also note the [Airbnb rules for ESLint](https://github.com/airbnb/javascript). See the `.eslintrc` file for details, including some overrides.


### Future Topics

* Running 1.5+ alongside ng 2.
* Example of refactoring from 1.5 to 2.
* Using unidirectional data flow with 1.5 components; i.e., Redux architecture. E.g., see [ng-redux](https://github.com/wbuchwalter/ng-redux) and [redux-ui-router](https://github.com/neilff/redux-ui-router).
* Various approaches to reactive data flow. E.g., RxJS, Cycle.js..
* Plus declarative data fetching via Relay & GraphQL, or possibly RxJS-based Falcor approach.
