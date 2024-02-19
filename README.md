# Babylon.js, vite and es6 modules

A Babylon.js sample project using typescript, latest babylon.js es6 core module, vite, hot loading, eslint, vscode support and more.

## Before getting started

This is a basic demo using Babylon's core module only. It is based on the [Getting started guide](https://doc.babylonjs.com/) at the documentation page. A lot of the engine's features are **not** covered here.

If you have any questions, you are very much invited to the [Babylon.js forum](https://forum.babylonjs.com) where the original author is hanging around almost daily.

## Getting started

To run the basic scene:

1. Clone / download this repository
2. run `npm install` to install the needed dependencies.
3. run `npm run dev`
4. Open `http://localhost:5173`
5. ????
6. Profit

Running `npm run dev` will start the vite dev server with hot-reloading turned on. Open your favorite editor (mine is VSCode, but you can use nano. we don't discriminate) and start editing.

The entry point for the entire TypeScript application is `./src/index.ts`. Any other file imported in this file will be included in the build.

To debug, open the browser's dev tool. Source maps are ready to be used. In case you are using VSCode, simply run the default debugger task (`Launch Chrome against localhost`) while making sure `npm run dev` is still running. This will allow you to debug your application straight in your editor.

## Loading different examples

The `./src/scenes` directory contains a few examples of scenes that can be loaded. To load a different scene change the import in `./src/createScene.ts` to the scene you want to load. The NavigationMeshRecast scene works on my machine.

## WebGPU? yes please

Open the URL in a webgpu-enabled browser and add "?engine=webgpu" to the URL. If you want to add a different scene, add it as a query parameter: `http://localhost:5173/?scene=physicsWithAmmo&engine=webgpu`.

## Running validation tests

It is possible to run validation tests to the scenes using playwright. To run the tests, run `npm run test:visuals`. This will run the tests in headless mode. (times out, only tested testing while the dev server was already running)
To configure the tests see the `/tests/` directory, and the `validation.spec.ts` file.

To generate the snapshots after adjusting the tests you can run `npm run test:visuals -- --update-snapshots`. This will auto-generate the snapshots for the tests.

## Unit tests

To run the unit tests, run `npm run test:unit`. This will run the tests in headless mode.
To add new tests, add a file anywhere in the source folder, called `FILENAME.unit.spec.ts`. The tests will be automatically picked up by jest.

## What else can I do

To lint your source code run `npm run lint`

To build the bundle in order to host it, run `npm run build`. This will bundle your code in production mode, meaning is will minify the code.

Building will take some time.

## What is this

That's an abstract question! What is which one of those wonderful things?

Babylon.js is [the world's leading WebGL engine](https://babylonjs.com) that starts with a 'b'. You should give it a try and leave those other numbers and letters behind. To read more about it and see some amazing samples, go to the [Babylon.js website](https://babylonjs.com), [Babylon's Playground](https://playground.babylonjs.com) or [Babylon's documentation](https://doc.babylonjs.com).

The rest? You should know already, this is why you are here.

## What is covered

-   Latest typescript version
-   Simple texture loading
-   dev-server will start on command
-   A working core-only example of babylon
-   Full debugging with any browser AND VS Code
-   (production) bundle builder
-   eslint default typescript rules integrated

## It takes too long to build

Vite is pretty snappy, dunno what to tell ya
