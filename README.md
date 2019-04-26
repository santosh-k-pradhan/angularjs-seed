# `angularjs starter project` — the starter project for AngularJS apps

This project is an application skeleton for a typical [AngularJS][angularjs] web app. You can use it
to quickly bootstrap your angular webapp projects and dev environment for these projects.

The project contains a sample AngularJS application and is preconfigured to install the AngularJS
framework and a bunch of development and testing tools for instant web development gratification.

The starter app doesn't do much, just shows how to wire two controllers and views together.


## Getting Started

To get you started you can simply clone the `https://github.com/santosh-k-pradhan/angularjs-starter-project.git` repository and install the dependencies:

### Prerequisites

You need git to clone the `https://github.com/santosh-k-pradhan/angularjs-starter-project.git` repository.

We also use a number of Node.js tools to initialize and test `angularjs starter project`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `https://github.com/santosh-k-pradhan/angularjs-starter-project.git`

```
git clone https://github.com/santosh-k-pradhan/angularjs-starter-project.git
cd angularjs-starter-project
```

### Install Dependencies

* We get the tools we depend upon and the AngularJS code via `npm`, the [Node package manager][npm].

We have preconfigured `npm` to automatically copy the downloaded AngularJS files to `app/lib` so we
can simply do:

```
npm install
```

* `node_modules` - contains the npm packages for the tools we need
* `app/lib` - contains the AngularJS framework files and other front end dependencies

*Note copying the AngularJS files from `node_modules` to `app/lib` makes it easier to serve the
files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


## Directory Layout

```
app/                  --> all of the source files for the application
  app.css               --> default stylesheet
  controllers/          --> contains all the controllers and test spec file
    home-controller.js    --> the controller logic
    home.spec.js          --> tests of the controller
    about-controller.js    --> the controller logic
    about.spec.js          --> tests of the controller
  views/                --> the view1 view template and logic
    about-template.html --> the partial template
    home-template.html --> the partial template
  services/             --> the service for REST API call
    register-service.js --> service for rest api call
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
karma.conf.js         --> config file for running unit tests with Karma
package.json          --> Node.js specific metadata, including development tools dependencies
package-lock.json     --> Npm specific metadata, including versions of installed development tools dependencies
```
## REST API Details
http://localhost:8080/api/signup
![signup](https://user-images.githubusercontent.com/19606332/44581001-beff7080-a7b9-11e8-8511-854586a9c490.JPG)

## Testing

There are two kinds of tests in the `angularjs starter project` application: Unit tests and end-to-end tests.

### Running Unit Tests

The `angularjs starter project` app comes preconfigured with unit tests. These are written in [Jasmine][jasmine],
which we run with the [Karma][karma] test runner. We provide a Karma configuration file to run them.

* The configuration is found at `karma.conf.js`.
* The unit tests are found next to the code they are testing and have a `.spec.js` suffix (e.g.
  `home.spec.js`).

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will start
watching the source and test files for changes and then re-run the tests whenever any of them
changes.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit. This is useful if you want to
check that a particular version of the code is operating as expected. The project contains a
predefined script to do this:

```
npm run test-single-run
```


<a name="e2e-testing"></a>
### Running End-to-End Tests

The `angularjs starter project` app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner. It uses native events and has
special features for AngularJS applications.

* The configuration is found at `e2e-tests/protractor-conf.js`.
* The end-to-end tests are found in `e2e-tests/scenarios.js`.

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor can
interact with it.

## Updating AngularJS and other dependencies

Since the AngularJS framework library code and tools are acquired through package managers (e.g.
npm) you can use these tools to easily update the dependencies. Simply run the preconfigured script:

```
npm run update-deps
```

This will call `npm update` and `npm run copy-libs`, which in turn will find and install the latest
versions that match the version ranges specified in the `package.json` file.

If you want to update a dependency to a version newer than what the specificed range would permit,
you can change the version range in `package.json` and then run `npm run update-deps` as usual.

### Running the App in Production

This really depends on how complex your app is and the overall infrastructure of your system, but
the general rule is that all you need in production are the files under the `app/` directory.
Everything else should be omitted.

AngularJS apps are really just a bunch of static HTML, CSS and JavaScript files that need to be
hosted somewhere they can be accessed by browsers.

If your AngularJS app is talking to the backend server via XHR or other means, you need to figure
out what is the best way to host the static files to comply with the same origin policy if
applicable. Usually this is done by hosting the files by the backend server or through
reverse-proxying the backend server(s) and web server(s).


## Contact

Santosh K. Pradhan


[angularjs]: https://angularjs.org/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[jasmine]: https://jasmine.github.io/
[karma]: https://karma-runner.github.io/
[local-app-url]: http://localhost:8000/index.html
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[protractor]: http://www.protractortest.org/
