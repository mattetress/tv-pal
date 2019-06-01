# TV Pal

TV Pal is a web application that queries the TMDb API and allows users to track their favorite television shows. Front end: React, Redux, Bootstrap. Back end: Ruby on Rails. Live demo: https://tv-pal.herokuapp.com [Demo account -- email: demo@gmail.com, password: password]


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

Fork and clone this repository.

Install gem dependencies

```
$ bundle install
```

Create database and run migrations

```
$ rake db:create && rake db:migrate
```

CD into the client directory and install dependencies

```
$ cd client && npm install
```

Create a .env file in the client directory

```
$ touch .env
```

Add TMDb API key environment variable to .env file.  Replace the X's with your own key.  Key can be obtained at themoviedb.org. Be sure to either remove the .env file or change the environment variable name before running a build, as this will expose your API key.

```
REACT_APP_TV_API_KEY=XXXXXXXXXXXXXXXXXX
```

Return to the root directory and start the development server

```
$ cd .. && rake start
```

The app should now be running at [localhost:3000](http://localhost:3000/)

## Built With

* [Rails](https://guides.rubyonrails.org/)
* [JavaScript](https://devdocs.io/javascript/)
* [React](https://reactjs.org/docs/getting-started.html)
* [Redux](https://redux.js.org/introduction/getting-started)
* [react-bootstrap](https://react-bootstrap.github.io/)


## Contributing

Please read [CONTRIBUTING.md](https://github.com/mattetress/tv-pal/blob/master/contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Matt Etress** - *Initial work* - [mattetress](https://github.com/mattetress)

See also the list of [contributors](https://github.com/mattetress/tv-pal/contributors) who participated in this project.
