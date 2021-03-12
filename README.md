# SpaceX Launch Programs

Demo link https://chaithra-spacex-launch-programs.netlify.app/

## For server side rendering

```
$ npm run build
$ npm run ssr
```
Use http://localhost:3006/ for viewing server side rendering

Implemented using **Express**

```
const app = express();
app.use("^/$", (req, res, next) => {
    fs.readFile(path.resolve("./build/index.html"), "utf-8", (err,data)=>{
        if(err) {
        console.log(err);
        return res(500).send("some err happened");
    }
    const context = {};
    const html = ReactDOMServer.renderToString(
        <StaticRouter
          location={req.url}
          context={context}
        >
          <App/>
        </StaticRouter>
      )
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
              )
        )
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")))

app.listen(PORT, ()=>{
    console.log(`App launched on ${PORT}`);
})
```

## Chaning the URL without refreshing the page to retain thw filters
```
window.history.replaceState(null, "", `/home?launch_year=${year}&successful_launch=${launch}&successful_landing=${landing}`)
```

## Responsive behaviour

Used media queries for different resolutions to achieve responsiveness
```
 @media (min-width: $value) {
        @content;
    }
```

## SASS

Used SASS for styling purpose.
* mixins for creating breakpoints for responsive behvaiour
```
@mixin breakpoint($value) {
    @media (min-width: $value) {
        @content;
    }
}
```
* variables for constants
```
$mobile: 320px;
$tablet: 701px;
$blueRibbon: #3846FF;
$activeGreen: #40a738;
```

## HOC

Used HOC to show loading component when the API is called and once the response is received show the cards component of each spaceX programs

## Utils

* Constants stored in Data.js file
* Common API service file 
