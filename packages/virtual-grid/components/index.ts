import { App } from 'vue';
import * as allComponents from './components';

export default {
  install(app: App): void {
    Object.keys(allComponents).forEach((key: string) => {
      app.use(allComponents[key]);
    });
  },
};
