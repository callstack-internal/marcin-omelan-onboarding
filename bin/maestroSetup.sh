#!/bin/bash

if ! [ -x "$(command -v maestro)" ]; then
    echo 'Error: maestro is not installed.' >&2
    read -p -r "Do you want to install maestro? (y/n)?" answer
    case ${answer} in
    y | Y)
        if ! [ -x "$(command -v brew)" ]; then
            brew tap mobile-dev-inc/tap
            brew install maestro
        else
            curl -fsSL "https://get.maestro.mobile.dev" | bash
        fi
        ;;
    *)
        exit 1
        ;;
    esac
fi
echo '✅ maestro is installed.'

if ! [ -x "$(command -v flashlight)" ]; then
    echo 'Error: flashlight is not installed.' >&2
    read -p -r "Do you want to install flashlight? (y/n)?" answer
    case ${answer} in
    y | Y)
        curl https://get.flashlight.dev | bash
        # check if arch is arm64 if yes install rosetta
        if [ "$(uname -m)" == "arm64" ] && [[ "$OSTYPE" == "darwin"* ]]; then
            echo "🚀 Installing Rosetta"
            softwareupdate --install-rosetta --agree-to-license
        fi
        ;;
    *)
        exit 1
        ;;
    esac
fi
echo '✅ flashlight is installed.'
