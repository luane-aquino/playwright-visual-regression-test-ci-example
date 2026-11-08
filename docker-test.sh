#!/bin/bash

PW_VERSION=$(npx playwright --version | cut -d' ' -f2)

docker run --rm -it \
  --ipc=host \
  -v "$(pwd)":/work \
  -v /work/node_modules \
  -w /work \
  mcr.microsoft.com/playwright:v${PW_VERSION}-noble \
  bash -c "npm ci && npx playwright test $*"