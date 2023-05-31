#!/bin/bash

set -e

# Check if the seeds file has been executed before
if [ ! -f /var/lib/postgresql/data/.seeded ]; then
  # Execute the seeds file
  psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" -f /seeds.sql

  # Create a marker file to indicate that the seeds file has been executed
  touch /var/lib/postgresql/data/.seeded
fi

exec "$@"