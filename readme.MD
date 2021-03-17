# Iniciando

Lo primero sera instalar webpack y su cli como dev

$ npm i --save-dev webpack
$ npm i --save-dev webpack-cli

## crear el archivo de configuracion ** webpack.config.js **

la forma mas simple es con *** module.exports = {} ***
exportando el objeto que contendra las configuraciones

### elemtnos esenciales para la configuracion
```
module.exports = {
    "entry": "./index.js",
    "output": {
        "filename": 'Bundle.js',
        "path": 'bundle'
    }
}
```

propiedades:
-entry : define el punto de entrada de webpack
-output: informacion sobre lo que se espera de webpack como
         salida
   -filename: nombre del archivo resultante
   -path: carpeta de destino de los archivos ya procesados
    por webpack, esta propiedad requiere un path absoluto
    de preferencia usar "path" de Nodejs

### reglas, avanzando en la configuracion de webpack
```
module.exports = {
    "entry": "./index.js",
    "output": {
        "filename": 'Bundle.js',
        "path": 'bundle'
    },
    "module": {
        "rules": [
            "test": /\.scss$/, //RegExp
            "use": [
                //Se procesan en orden reverso de mayor a m
                "style-loader",//aplica los estilos via DOM
                "css-loader",//interpreta css 
                "sass-loader", //procesa sass
            ]
        ]
    }
}
```
El siguiente elemento es "module"
-module : modulos a usar
--rules : reglas a aplicar
---test : que archivos seran, se usa una regex para esto
---use  : que loaders usar, esto se leen de un array que se
le en orden invertido o del ultimo al primero

webpack por default solo es capaz de leer archvios de 
JavaScript o JSON asi que para poder procesar otro
tipo de archivos como css, html imagenes etc.
webpack usa los loaders para poder entender estos archivos
extras

### use mas a fondo

Es posible pasarle a use un objeto con opciones
si el loader lo permite ( ver documentacion de loader )
```
module.exports = {
    "entry": "./index.js",
    "output": {
        "filename": '[hash].Bundle.js',
        "path": 'bundle'
    },
    "module": {
        "rules": [
            {
                test: /\.jpg$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit:1000
                    }
                }
            }
        ]
        ]
    }
}
```
### Hash en los nombres de los archivos
"[hash].filename.js : agregando este atributo a el nombre
nombre de los archivos podemos agregarle un hash unico

## Plugins en Webpack

Los loader tienen la limitacion de que solo pueden
procesar archivos dependiendo del lenguaje que sean
js, sass, jp etc..

pero para extender mas a webpack es posible instalar
Plugins para poder hacer mas que solo procesar archivos
para esto
1.-se instala el plugin
2.-se require el plugin ( require() ) en el archivo
de configuracion de webpack
``` javascript
module.exports = {
    "entry": "./index.js",
    "output": {
        "filename": '[hash].Bundle.js',
        "path": 'bundle'
    },
    "module": {
        "rules": [
            {
                test: /\.jpg$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit:1000
                    }
                }
            }
        ]
        ]
    },
    "plugins": [ new plugintitle()]
}
```
Para agregar plugins es necesario agregar una nueva
propiedad a la raiz del objeto, no se puede poner
dentro de module, entry u outpu, "plugins" requiere
de una nueva propiedad que almacena un array

## Scripts dentro de Package.json

El script mas bascio para poder usar webpack es
$ *** webpack ***

obvio, pero webpack nos permite añadir mas funcionalidad
$ *** webpack --watch ***
estara siempre atento a los cambios que ocurran en nuestro
punto de entrada

y puedes añadirlos a los scripts de npm
```json
"scripts": {
    "build": "webpack",
    "watch": "webpack --watch",
    "build:dev": "npm run build -- --env.mode=dev",
    "build:prod": "npm run build -- --env.mode=prod"
  },
```
### scripts utiles para configurar el modo
con los script de arriba es posible definir el modo en el 
que se ejecutara el build de webpack
y dependiendo el modo podemos ejecutar ciertas acciones o
configuraciones