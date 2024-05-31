
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
            └── fsmonitor-watchman.sample
            └── post-update.sample
            └── pre-applypatch.sample
            └── pre-commit.sample
            └── pre-merge-commit.sample
            └── pre-push.sample
            └── pre-rebase.sample
            └── pre-receive.sample
            └── prepare-commit-msg.sample
            └── push-to-checkout.sample
            └── update.sample
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
                        └── 📁drawable-land-ldpi
                            └── splash.png
                        └── 📁drawable-land-mdpi
                            └── splash.png
                        └── 📁drawable-land-night-hdpi
                            └── splash.png
                        └── 📁drawable-land-night-ldpi
                            └── splash.png
                        └── 📁drawable-land-night-mdpi
                            └── splash.png
                        └── 📁drawable-land-night-xhdpi
                            └── splash.png
                        └── 📁drawable-land-night-xxhdpi
                            └── splash.png
                        └── 📁drawable-land-night-xxxhdpi
                            └── splash.png
                        └── 📁drawable-land-xhdpi
                            └── splash.png
                        └── 📁drawable-land-xxhdpi
                            └── splash.png
                        └── 📁drawable-land-xxxhdpi
                            └── splash.png
                        └── 📁drawable-night
                            └── splash.png
                        └── 📁drawable-port-hdpi
                            └── splash.png
                        └── 📁drawable-port-ldpi
                            └── splash.png
                        └── 📁drawable-port-mdpi
                            └── splash.png
                        └── 📁drawable-port-night-hdpi
                            └── splash.png
                        └── 📁drawable-port-night-ldpi
                            └── splash.png
                        └── 📁drawable-port-night-mdpi
                            └── splash.png
                        └── 📁drawable-port-night-xhdpi
                            └── splash.png
                        └── 📁drawable-port-night-xxhdpi
                            └── splash.png
                        └── 📁drawable-port-night-xxxhdpi
                            └── splash.png
                        └── 📁drawable-port-xhdpi
                            └── splash.png
                        └── 📁drawable-port-xxhdpi
                            └── splash.png
                        └── 📁drawable-port-xxxhdpi
                            └── splash.png
                        └── 📁drawable-v24
                            └── ic_launcher_foreground.xml
                        └── 📁layout
                            └── activity_main.xml
                        └── 📁mipmap-anydpi-v26
                            └── ic_launcher.xml
                            └── ic_launcher_round.xml
                        └── 📁mipmap-hdpi
                            └── ic_launcher.png
                            └── ic_launcher_background.png
                            └── ic_launcher_foreground.png
                            └── ic_launcher_round.png
                        └── 📁mipmap-ldpi
                            └── ic_launcher_background.png
                        └── 📁mipmap-mdpi
                            └── ic_launcher.png
                            └── ic_launcher_background.png
                            └── ic_launcher_foreground.png
                            └── ic_launcher_round.png
                        └── 📁mipmap-xhdpi
                            └── ic_launcher.png
                            └── ic_launcher_background.png
                            └── ic_launcher_foreground.png
                            └── ic_launcher_round.png
                        └── 📁mipmap-xxhdpi
                            └── ic_launcher.png
                            └── ic_launcher_background.png
                            └── ic_launcher_foreground.png
                            └── ic_launcher_round.png
                        └── 📁mipmap-xxxhdpi
                            └── ic_launcher.png
                            └── ic_launcher_background.png
                            └── ic_launcher_foreground.png
                            └── ic_launcher_round.png
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
                └── drawable-mdpi-icon.png
                └── drawable-xhdpi-icon.png
                └── drawable-xxhdpi-icon.png
                └── drawable-xxxhdpi-icon.png
                └── hdpi-background.png
                └── hdpi-foreground.png
                └── ldpi-background.png
                └── ldpi-foreground.png
                └── mdpi-background.png
                └── mdpi-foreground.png
                └── xhdpi-background.png
                └── xhdpi-foreground.png
                └── xxhdpi-background.png
                └── xxhdpi-foreground.png
                └── xxxhdpi-background.png
                └── xxxhdpi-foreground.png
            └── icon-background.png
            └── icon-foreground.png
            └── 📁splash
                └── drawable-land-hdpi-screen.png
                └── drawable-land-ldpi-screen.png
                └── drawable-land-mdpi-screen.png
                └── drawable-land-xhdpi-screen.png
                └── drawable-land-xxhdpi-screen.png
                └── drawable-land-xxxhdpi-screen.png
                └── drawable-port-hdpi-screen.png
                └── drawable-port-ldpi-screen.png
                └── drawable-port-mdpi-screen.png
                └── drawable-port-xhdpi-screen.png
                └── drawable-port-xxhdpi-screen.png
                └── drawable-port-xxxhdpi-screen.png
        └── icon.png
        └── 📁ios
            └── 📁icon
                └── icon-1024.png
                └── icon-108@2x.png
                └── icon-20.png
                └── icon-20@2x.png
                └── icon-20@3x.png
                └── icon-24@2x.png
                └── icon-27.5@2x.png
                └── icon-29.png
                └── icon-29@2x.png
                └── icon-29@3x.png
                └── icon-40.png
                └── icon-40@2x.png
                └── icon-40@3x.png
                └── icon-44@2x.png
                └── icon-50.png
                └── icon-50@2x.png
                └── icon-60.png
                └── icon-60@2x.png
                └── icon-60@3x.png
                └── icon-72.png
                └── icon-72@2x.png
                └── icon-76.png
                └── icon-76@2x.png
                └── icon-83.5@2x.png
                └── icon-86@2x.png
                └── icon-98@2x.png
                └── icon.png
                └── icon@2x.png
            └── 📁splash
                └── Default-1792h~iphone.png
                └── Default-2436h.png
                └── Default-2688h~iphone.png
                └── Default-568h@2x~iphone.png
                └── Default-667h.png
                └── Default-736h.png
                └── Default-Landscape-1792h~iphone.png
                └── Default-Landscape-2436h.png
                └── Default-Landscape-2688h~iphone.png
                └── Default-Landscape-736h.png
                └── Default-Landscape@2x~ipad.png
                └── Default-Landscape@~ipadpro.png
                └── Default-Landscape~ipad.png
                └── Default-Portrait@2x~ipad.png
                └── Default-Portrait@~ipadpro.png
                └── Default-Portrait~ipad.png
                └── Default@2x~iphone.png
                └── Default@2x~universal~anyany.png
                └── Default~iphone.png
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
                └── bart-chart.component.scss
                └── bart-chart.component.spec.ts
                └── bart-chart.component.ts
            └── 📁home
                └── home-routing.module.ts
                └── home.module.ts
                └── home.page.html
                └── home.page.scss
                └── home.page.spec.ts
                └── home.page.ts
            └── 📁indicator-detail
                └── indicator-detail-routing.module.ts
                └── indicator-detail.component.html
                └── indicator-detail.component.scss
                └── indicator-detail.component.spec.ts
                └── indicator-detail.component.ts
                └── indicator-detail.module.ts
            └── 📁indicator-modal
                └── indicator-modal.component.html
                └── indicator-modal.component.scss
                └── indicator-modal.component.spec.ts
                └── indicator-modal.component.ts
            └── 📁line-chart
                └── line-chart.component.html
                └── line-chart.component.scss
                └── line-chart.component.spec.ts
                └── line-chart.component.ts
            └── 📁login-modal
                └── login-modal.component.html
                └── login-modal.component.scss
                └── login-modal.component.spec.ts
                └── login-modal.component.ts
            └── 📁services
                └── auth.service.spec.ts
                └── auth.service.ts
                └── indicator-data.service.spec.ts
                └── indicator-data.service.ts
            └── 📁tabs
                └── tabs.component.html
                └── tabs.component.scss
                └── tabs.component.spec.ts
                └── tabs.component.ts
        └── 📁assets
            └── 📁fonts
                └── 📁roboto
                    └── Roboto-Bold.ttf
                    └── Roboto-BoldItalic.ttf
                    └── Roboto-Italic.ttf
                    └── Roboto-Light.ttf
                    └── Roboto-Medium.ttf
                    └── Roboto-Regular.ttf
                    └── RobotoCondensed-Bold.ttf
                    └── RobotoCondensed-Light.ttf
                    └── RobotoCondensed-Regular.ttf
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