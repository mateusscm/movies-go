package main

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func (app *application) routes() http.Handler {
	// create a router mux
	mux := chi.NewRouter()

	mux.Use(middleware.Recoverer)
	mux.Use(app.enableCORS)

	mux.Get("/authenticate", app.authenticate)
	mux.Route("/api", func(r chi.Router) {
		r.Get("/", app.Home)
		r.Get("/movies", app.AllMovies)
	})

	return mux // return the router
}
