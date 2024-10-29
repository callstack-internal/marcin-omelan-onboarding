#!/bin/sh

if ! [ -x "$(command -v maestro)" ]; then
    echo 'Error: maestro is not installed.' >&2
    read -p "Do you want to install maestro? [y/n]" -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        if ! [ -x "$(command -v brew)" ]; then
            brew tap mobile-dev-inc/tap
            brew install maestro
        else
            curl -fsSL "https://get.maestro.mobile.dev" | bash
        fi
    else
        exit 1
    fi
fi
echo '✅ maestro is installed.'

if ! [ -x "$(command -v flashlight)" ]; then
    echo 'Error: flashlight is not installed.' >&2
    read -p "Do you want to install flashlight? [y/n]" -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        curl https://get.flashlight.dev | bash
        # check if arch is arm64 if yes install rosetta
        if [ "$(uname -m)" == "arm64" ] && [[ "$OSTYPE" == "darwin"* ]]; then
            echo "🚀 Installing Rosetta"
            softwareupdate --install-rosetta --agree-to-license
        fi
    else
        exit 1
    fi
    exit 1
fi
echo '✅ flashlight is installed.'
