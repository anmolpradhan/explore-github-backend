# explore-github-backend
To run this project you must have `nodemon` installed globally in your system.


To start this project, you can run:
### `nodemon app`

Runs the app in development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

### API Endpoints
List of available routes
`/api/user/:user` - Get details of github users according to `:user` username

`/api/repository/:query` - Get all github repository matching `query`

`/api/repository/:user/:repos` - Get details of github repository from owner `:user` username accoridng to `repository`
