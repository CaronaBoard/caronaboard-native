# CaronaBoard
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![iOS Build](https://dashboard.buddybuild.com/api/statusImage?appID=59807bf48a3be00001bb27ae&branch=master&build=latest)](https://dashboard.buddybuild.com/apps/59807bf48a3be00001bb27ae/build/latest?branch=master)
[![Android Build](https://dashboard.buddybuild.com/api/statusImage?appID=5936a240044f3d0001b444a4&branch=master&build=latest)](https://dashboard.buddybuild.com/apps/5936a240044f3d0001b444a4/build/latest?branch=master)
[![Codefresh build status]( https://g.codefresh.io/api/badges/build?repoOwner=CaronaBoard&repoName=caronaboard-native&branch=master&pipelineName=caronaboard-native&accountName=eduardomoroni&type=cf-1)]( https://g.codefresh.io/repositories/CaronaBoard/caronaboard-native/builds?filter=trigger:build;branch:master;service:5936bed49d2f200001072729~caronaboard-native)

# Getting started
Prepare seu ambiente seguindo este [LINK](https://github.com/CaronaBoard/caronaboard-native/wiki/Environment-Setup)
1. `yarn install`
2. `yarn run ios` isso irá abrir o seu iOS simulator, caso queria rodar o android você precisa abrir o emulador android e rodar `yarn run android`
3. Erros comuns e suas soluções serão documentadas [AQUI](https://github.com/CaronaBoard/caronaboard-native/wiki/Knowed-Issues)

Todos comandos `yarn` podem ser substituidos por `npm`


# Git Hooks
O projeto tem githooks configurados através do [Husky🐶](https://github.com/typicode/husky), os hooks podem ser encontrados no [package.json](https://github.com/CaronaBoard/caronaboard-native/blob/master/package.json). Basicamente a cada tentativa de commit será verificado de o código está seguinte o guia de estilo [StandardJS](http://standardjs.com/) alguns erros podem ser consertados automaticamente através de `yarn run lint-fix`.
A cada tentativa de commit será verificado se os testes estão passando, estamos guardando [snapshots](https://facebook.github.io/jest/docs/snapshot-testing.html) de cada componente de UI. Caso tenha feito alguma mudança intencional de UI é só rodar `yarn run update-snapshot` e commitar os arquivos que foram atualizados.
