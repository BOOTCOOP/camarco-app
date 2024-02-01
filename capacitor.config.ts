import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.camarco.indicadores',
  appName: 'Indicadores de la Construcción',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    hostname: 'localhost:8100',
    iosScheme: 'https',
    androidScheme: 'https'
    },
  plugins: {
      "SplashScreen": {
        launchShowDuration: 3000,
        launchAutoHide: true,
        backgroundColor: "#B44B4B",
        androidSplashResourceName: "splash",
        showSpinner: false,
        splashFullScreen: true,
        splashImmersive: true,
      }
  },
};

export default config;
