SCRIPT_PATH=$(dirname "$0")
ROOT_DIR="$SCRIPT_PATH/../.."

source "$ROOT_DIR/.env"

if [ -z "$SLUG" ]; then
  echo "SLUG not set in .env"
  exit 1;
fi

docker exec -it $SLUG-wordpress /bin/bash
