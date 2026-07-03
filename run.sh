#!/usr/bin/env bash
set -eu

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  # shellcheck source=/dev/null
  . "$NVM_DIR/nvm.sh"
  nvm use 20 2>/dev/null || nvm use 18 2>/dev/null || true
fi

if ! command -v node >/dev/null 2>&1; then
  echo "Error: Node.js no está instalado."
  exit 1
fi

NODE_MAJOR="$(node -p "process.versions.node.split('.')[0]")"
if [ "$NODE_MAJOR" -lt 20 ]; then
  echo "Error: se requiere Node.js >= 20 para Tailwind 4 (actual: $(node -v))."
  echo "Ejecuta: nvm install 20 && nvm use 20"
  exit 1
fi

if [ ! -d "node_modules" ]; then
  echo "Instalando dependencias..."
  npm install
fi

port_in_use() {
  local port="$1"
  if command -v ss >/dev/null 2>&1; then
    ss -tlnH "sport = :${port}" 2>/dev/null | grep -q .
    return
  fi
  if command -v netstat >/dev/null 2>&1; then
    netstat -tln 2>/dev/null | grep -q ":${port} "
    return
  fi
  return 1
}

kill_pids() {
  local pids="$1"
  local label="$2"
  if [ -z "$pids" ]; then
    return 0
  fi
  echo "  ${label}: ${pids//$'\n'/ }"
  # shellcheck disable=SC2086
  kill -TERM $pids 2>/dev/null || true
  sleep 0.3
  # shellcheck disable=SC2086
  kill -KILL $pids 2>/dev/null || true
}

kill_port() {
  local port="$1"
  local pids=""

  if command -v lsof >/dev/null 2>&1; then
    pids="$(lsof -ti:"${port}" -sTCP:LISTEN 2>/dev/null || true)"
    if [ -z "$pids" ]; then
      pids="$(lsof -ti:"${port}" 2>/dev/null || true)"
    fi
  fi

  if [ -n "$pids" ]; then
    kill_pids "$pids" "Puerto ${port}"
  elif command -v fuser >/dev/null 2>&1; then
    if fuser "${port}/tcp" >/dev/null 2>&1; then
      echo "  Puerto ${port}: fuser -k"
      fuser -k "${port}/tcp" >/dev/null 2>&1 || true
    fi
  fi
}

kill_dev_processes() {
  echo "  Procesos dev del proyecto (incl. detenidos con Ctrl+Z)..."
  pkill -9 -f "${ROOT}/node_modules/.bin/vite" 2>/dev/null || true
  pkill -9 -f "${ROOT}/node_modules/vite" 2>/dev/null || true
}

free_ports() {
  echo "Liberando puertos..."
  kill_dev_processes
  sleep 0.5

  for port in 5173 5174 5175 5176; do
    kill_port "$port"
  done

  sleep 0.5

  local blocked=""
  for port in 5173 5174 5175 5176; do
    if port_in_use "$port"; then
      blocked="${blocked} ${port}"
    fi
  done

  if [ -n "$blocked" ]; then
    echo ""
    echo "Advertencia: siguen ocupados:${blocked}"
    echo "Probable causa: vite/node detenido (Ctrl+Z) o proceso en otro terminal."
    echo "Solución: bash kill-dev.sh"
    echo ""
  fi
}

cleanup() {
  echo ""
  echo "Deteniendo servicios..."
  jobs -p | xargs -r kill -TERM 2>/dev/null || true
  sleep 0.3
  jobs -p | xargs -r kill -KILL 2>/dev/null || true
  wait 2>/dev/null || true
  free_ports
}

trap cleanup EXIT INT TERM

free_ports

echo "======================================"
echo " El Sistema Ganador — Landing"
echo " Libro:      http://localhost:5173/libro"
echo " Directores: http://localhost:5173/directores"
echo " Ctrl+C para detener"
echo "======================================"
echo ""

npm run dev &
wait
