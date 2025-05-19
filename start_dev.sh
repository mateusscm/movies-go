#!/bin/bash

set -e

# CORES
GREEN="\033[0;32m"
CYAN="\033[0;36m"
RED="\033[0;31m"
NC="\033[0m" # No Color

# Função para parar tudo
stop() {
  echo -e "${RED}Parando containers e processos locais...${NC}"
  docker-compose -f backend/docker-compose.yml down
  pkill -f "go run"
  pkill -f "vite"
  echo -e "${RED}Ambiente finalizado.${NC}"
  exit 0
}

# Capturar Ctrl+C
trap stop SIGINT

echo -e "${CYAN}1. Iniciando containers do backend...${NC}"
(cd backend && docker-compose up -d)

sleep 5

echo -e "${CYAN}2. Iniciando servidor Go...${NC}"
(cd backend && go run ./cmd/api > ../backend.log 2>&1 &)
sleep 2

echo -e "${CYAN}3. Iniciando frontend...${NC}"
(cd frontend && pnpm install && pnpm run dev > ../frontend.log 2>&1 &)
sleep 2

echo -e "${GREEN}Ambiente iniciado com sucesso!${NC}"

echo ""
echo -e "${CYAN}Links úteis:${NC}"
echo -e "🔗 PGAdmin:     ${GREEN}http://localhost:54321${NC}"
echo -e "🔗 API Backend: ${GREEN}http://localhost:8080${NC}"
echo -e "🔗 Frontend:    ${GREEN}http://localhost:5173${NC}"
echo ""
echo -e "${CYAN}Logs sendo gravados em:${NC} backend.log e frontend.log"
echo ""
echo -e "${RED}Pressione Ctrl+C para parar o ambiente${NC}"

# Aguarda Ctrl+C
while true; do sleep 1; done
