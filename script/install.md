#!/bin/zsh

#installs homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"


[comment]: <> (#install dependencies)

[comment]: <> (brew install nodejs | brew tap mongodb/brew | brew update | brew install mongodb-community@6.0)
Install:


https://nodejs.org/en/ | tools/chocolatey
# get code
git clone https://github.com/AM1897/Frontend-LIA

# install node packages and start
cd server
npm i | && npm start

cd ../client
npm i | && npm start