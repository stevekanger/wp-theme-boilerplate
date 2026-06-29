SCRIPT_PATH=$(dirname "$0")
ROOT_DIR="$SCRIPT_PATH/../.."

source "$ROOT_DIR/.env"

if [ -z "$NAMESPACE" ]; then
  echo "NAMESPACE not set in .env"
  exit 1;
fi

docker exec -it $NAMESPACE-wordpress /bin/bash
