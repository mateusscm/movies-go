package main

import (
	"log"
	"net/http"
)

func (app *application) Home(w http.ResponseWriter, r *http.Request) {
	payload := struct {
		Status  string `json:"status"`
		Message string `json:"message"`
		Version string `json:"version"`
	}{
		Status:  "active",
		Message: "Go Movies up and running",
		Version: "1.0.0",
	}

	_ = app.writeJSON(w, http.StatusOK, payload)
}

func (app *application) AllMovies(w http.ResponseWriter, r *http.Request) {
	movies, err := app.DB.AllMovies()
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	_ = app.writeJSON(w, http.StatusOK, movies)
}

func (app *application) authenticate(w http.ResponseWriter, r *http.Request) {
	// read JSON payload

	// validade user against the database

	// check password

	// create JWT user
	u := jwtUser{
		ID:        1,
		FirstName: "John",
		LastName:  "Doe",
	}

	// generate token pair
	tokenPairs, err := app.auth.GenerateTokenPair(u)
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	log.Println("Token pairs:", tokenPairs)

	w.Write([]byte(tokenPairs.Token))
}
