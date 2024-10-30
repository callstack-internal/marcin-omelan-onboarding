#!/bin/bash

# To be used on CI server
cd android || exit
./gradlew installRelease
cd ..
"$HOME"/.flashlight/bin/flashlight test --bundleId com.onboarding --testCommand "$HOME/.maestro/bin/maestro test __tests__/maestro/NavigationAndroid.yaml" --duration 10000 --resultsFilePath results.json
