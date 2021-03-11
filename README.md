# SpaceX Launch Programs

Demo link https://chaithra-spacex-launch-programs.netlify.app/

## For server side rendering

```
$ npm run build
$ npm run ssr
```
Use http://localhost:3006/ for viewing server side rendering



## Responsive behaviour

Used media queries for different resolutions to achieve responsiveness
```
 @media (min-width: $value) {
        @content;
    }
```
## HOC

Used HOC to show loading component when the API is called and once the response is received show the cards component of each spaceX programs

## Utils

* Constants stored in Data.js file
* Common API service file 
