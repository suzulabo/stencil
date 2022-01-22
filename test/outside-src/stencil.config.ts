import { CompilerCtx, Config } from '../../internal';
import path from 'node:path';

export const config: Config = {
  srcDir: 'src/app1',
  buildDocs: true,
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
    },
    {
      type: 'custom',
      name: 'watchAdditional',
      async generator(stencilConfig, compilerCtx: CompilerCtx) {
        if (!stencilConfig.watch) return;
        compilerCtx.addWatchFile(path.resolve('.', 'src/shared/components/shared-panel.tsx'));
        compilerCtx.addWatchFile(path.resolve('.', 'src/shared/components/shared-panel.css'));
      },
    },
  ],
  devServer: {
    openBrowser: false,
  },
};
