#!/bin/bash
set -e

cd frontend
export HOSTNAME="0.0.0.0"
export PORT="${PORT:-3000}"

echo "Starting Next.js server on $HOSTNAME:$PORT..."
exec npx next start -H 0.0.0.0 -p "$PORT"

