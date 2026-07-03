#!/usr/bin/env bash
set -eu

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

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

echo "Liberando puertos de desarrollo..."
pkill -9 -f "${ROOT}/node_modules/.bin/vite" 2>/dev/null || true
pkill -9 -f "${ROOT}/node_modules/vite" 2>/dev/null || true
sleep 0.5

for port in 5173 5174 5175 5176; do
  kill_port "$port"
done

sleep 0.5

for port in 5173 5174 5175 5176; do
  if port_in_use "$port"; then
    echo "Puerto ${port}: aún ocupado"
  else
    echo "Puerto ${port}: libre"
  fi
done

echo "Listo."
