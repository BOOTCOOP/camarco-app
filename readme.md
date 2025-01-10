
# APP Mobile 📱 Camarco


## Tabla de Contenidos
 
- ### <u>[Descripción](#Descripción)</u>
- ### <u>[Instalación](#Instalación)</u>
- ### <u>[Ejecución del Proyecto](#EjecucióndelProyecto)</u>
- ### <u>[Construcción](#Construcción)</u>
- ### <u>[Tests](#Tests)</u>
- ### <u>[Dependencias](#Dependencias)</u>
- ### <u>[Estructura del Proyecto](#EstructuradelProyecto)</u>
- ### <u>[Autor](#Autor)</u>
- ### <u>[Integrantes](#Integrantes)</u>

## <a id="Descripción">Descripción</a><br>

Indicadores Camarco es una aplicación móvil desarrollada con Ionic y Angular que proporciona una interfaz para visualizar diferentes indicadores económicos y financieros. La aplicación está diseñada para ofrecer una experiencia de usuario intuitiva y accesible tanto en dispositivos Android como iOS.


## <a id="Instalación">Instalación</a><br>

Para instalar y ejecutar este proyecto, necesitas tener instalado Node.js y npm (Node Package Manager). Luego, sigue estos pasos:

1.  Clona este repositorio:
    ```sh
    git clone https://github.com/BOOTCOOP/camarco-app.git
    cd camarco-app
    ```

2.  Instala las dependencias del proyecto:
    ```sh
    npm install
    ```
## <a id="EjecucióndelProyecto">Ejecución del Proyecto</a><br>

Para ejecutar la aplicación en un servidor local, utiliza el siguiente comando:
```sh
npm start
```
Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en http://localhost:4200/.

## <a id="Construcción">Construcción</a><br>

Para construir la aplicación para producción, utiliza:
```sh
npm run build
```
Los archivos de la aplicación se generarán en el directorio dist/

## <a id="Tests">Tests</a><br>
Para ejecutar las pruebas unitarias, utiliza:
```sh
npm test
```

## <a id="Dependencias">Dependencias</a><br>

El proyecto utiliza las siguientes dependencias:

- **@capacitor/core "^4.0.0"**
- **@ionic/angular "^6.1.9"**
- **chart.js "^4.1.2"**
- **lodash "^4.17.21"**
- **moment "^2.29.4"**
- **ng2-charts "^4.1.1"**
- **rxjs "~7.5.0"**
- **zone.js "~0.11.4"**

Para más detalles, consulta el archivo package.json.

## <a id="EstructuradelProyecto">Estructura del Proyecto</a><br>

```
└── 📁camarco-app
    └── .browserslistrc
    └── .editorconfig
    └── .eslintrc.json
    └── 📁.gitCliente
        └── config
        └── description
        └── HEAD
        └── 📁hooks
            └── applypatch-msg.sample
            └── commit-msg.sample
            └── ...
        └── index
        └── 📁info
            └── exclude
        └── 📁logs
            └── HEAD
            └── 📁refs
                └── 📁heads
                    └── dev
                └── 📁remotes
                    └── 📁origin
                        └── HEAD
        └── 📁objects
            └── 📁pack
                └── pack-01293899431392370756a12b33302946914b1230.idx
                └── pack-01293899431392370756a12b33302946914b1230.pack
        └── packed-refs
        └── 📁refs
            └── 📁heads
                └── dev
            └── 📁remotes
                └── 📁origin
                    └── HEAD
    └── .gitignore
    └── 📁.vscode
        └── extensions.json
    └── 📁android
        └── .gitignore
        └── 📁app
            └── .gitignore
            └── build.gradle
            └── capacitor.build.gradle
            └── proguard-rules.pro
            └── 📁release
                └── output-metadata.json
            └── 📁src
                └── 📁androidTest
                    └── 📁java
                        └── 📁com
                            └── 📁getcapacitor
                                └── 📁myapp
                                    └── ExampleInstrumentedTest.java
                └── 📁main
                    └── AndroidManifest.xml
                    └── ic_launcher-playstore.png
                    └── 📁java
                        └── 📁com
                            └── 📁camarco
                                └── 📁indicadores
                                    └── MainActivity.java
                    └── 📁res
                        └── 📁drawable
                            └── ic_launcher_background.xml
                            └── splash.png
                        └── 📁drawable-land-hdpi
                            └── splash.png
                        └── ...
                        └── 📁values
                            └── ic_launcher_background.xml
                            └── strings.xml
                            └── styles.xml
                        └── 📁xml
                            └── file_paths.xml
                            └── network_security_config.xml
                └── 📁test
                    └── 📁java
                        └── 📁com
                            └── 📁getcapacitor
                                └── 📁myapp
                                    └── ExampleUnitTest.java
        └── build.gradle
        └── capacitor.settings.gradle
        └── 📁gradle
            └── 📁wrapper
                └── gradle-wrapper.jar
                └── gradle-wrapper.properties
        └── gradle.properties
        └── gradlew
        └── gradlew.bat
        └── settings.gradle
        └── variables.gradle
    └── angular.json
    └── capacitor.config.json
    └── capacitor.config.ts
    └── ionic.config.json
    └── karma.conf.js
    └── package-lock.json
    └── package.json
    └── 📁resources
        └── 📁android
            └── 📁icon
                └── drawable-hdpi-icon.png
                └── drawable-ldpi-icon.png
                └── ...
            └── icon-background.png
            └── icon-foreground.png
            └── 📁splash
                └── drawable-land-hdpi-screen.png
                └── drawable-land-ldpi-screen.png
                └── ...
        └── icon.png
        └── 📁ios
            └── 📁icon
                └── icon-1024.png
                └── icon-108@2x.png
                └── ...
            └── 📁splash
                └── Default-1792h~iphone.png
                └── Default-2436h.png
                └── ... 
        └── splash.png
    └── 📁src
        └── 📁app
            └── app-routing.module.ts
            └── app.component.html
            └── app.component.scss
            └── app.component.spec.ts
            └── app.component.ts
            └── app.module.ts
            └── 📁bart-chart
                └── bart-chart.component.html
                └── ...
            └── 📁home
            └── ...
        └── 📁assets
            └── 📁fonts
                └── 📁roboto
            └── 📁icon
                └── favicon.png
            └── logo.png
            └── shapes.svg
        └── 📁environments
            └── environment.prod.ts
            └── environment.ts
        └── global.scss
        └── index.html
        └── main.ts
        └── manifest.webmanifest
        └── polyfills.ts
        └── test.ts
        └── 📁theme
            └── variables.scss
        └── zone-flags.ts
    └── tsconfig.app.json
    └── tsconfig.json
    └── tsconfig.spec.json
```

## <a id="Autor">Autor</a><br>

Este proyecto lo mantiene **Boot Coop**, *Cooperativa de Software*.

## <a id="Integrantes">Integrantes</a><br>

- [@VarelaCristianFacundo](https://www.github.com/VarelaCristianFacundo)
- [@MiguelMaidana](https://www.github.com/MiguelMaidana)