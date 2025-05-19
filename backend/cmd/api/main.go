package main

import (
	"backend/internal/repository"
	"backend/internal/repository/dbrepo"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/joho/godotenv"
)

const port = 8080

type application struct {
	DSN          string // Data Source Name
	Domain       string
	DB           repository.DatabaseRepo
	auth         Auth
	JWTSecret    string
	JWTIssuer    string
	JWTAudience  string
	CookieDomain string
}

func main() {
	// Carrega variáveis do .env se existir
	_ = godotenv.Load("../.env")
	_ = godotenv.Load("../../.env")
	_ = godotenv.Load(".env")

	var app application

	// Lê variáveis do ambiente ou usa padrão
	dsn := os.Getenv("DSN")
	if dsn == "" {
		log.Fatal("DSN não definido no ambiente (.env)")
	}
	app.DSN = dsn
	app.JWTSecret = getEnv("JWT_SECRET", "verysecret")
	app.JWTIssuer = getEnv("JWT_ISSUER", "example.com")
	app.JWTAudience = getEnv("JWT_AUDIENCE", "example.com")
	app.CookieDomain = getEnv("COOKIE_DOMAIN", "localhost")
	app.Domain = getEnv("DOMAIN", "example.com")

	// connect to the database
	conn, err := app.connectDB()
	if err != nil {
		log.Fatal(err)
		return
	}

	app.DB = &dbrepo.PostgresDBRepo{DB: conn}
	defer app.DB.Connection().Close()

	app.auth = Auth{
		Issuer:             app.JWTIssuer,
		Audience:           app.JWTAudience,
		Secret:             app.JWTSecret,
		TokenExpiry:        15 * time.Minute,
		RefreshTokenExpiry: 24 * time.Hour,
		CookiePath:         "/",
		CookieName:         "__Host-refresh-token",
		CookieDomain:       app.CookieDomain,
	}

	log.Println("Starting app on port", port)

	// start a web server
	err = http.ListenAndServe(fmt.Sprintf(":%d", port), app.routes())
	if err != nil {
		log.Fatal(err)
		return
	}
}

// Função auxiliar para pegar variáveis do ambiente com valor padrão
func getEnv(key, fallback string) string {
	if value, exists := os.LookupEnv(key); exists {
		return value
	}
	return fallback
}
