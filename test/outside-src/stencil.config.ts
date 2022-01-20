import { Config } from '../../internal';

export const config: Config = {
  srcDir: 'src/app1',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
  devServer: {
    openBrowser: false,
  },
};
