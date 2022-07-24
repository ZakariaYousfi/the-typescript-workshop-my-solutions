
// inorder to stop the ts error that you get from this import statement just run tsc --init in the directory of this file and make sure module is set to commonJS in the tsconfig.json file
import _ =require('lodash')

const playerNames = ['Springer','Bregman','Altuve','Correa','Brantley','White','Gonzalez','Kemp','Reddick']

const lineupOrder = [1,2,3,4,5,6,7,8,9]

console.log(_.zip(lineupOrder,playerNames))




