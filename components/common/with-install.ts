import type { App, Component, Plugin } from 'vue';

export const withInstall = <T extends Component>(component: T) => {
  const c = component as any;
  c.install = function (app: App) {
    app.component(c.name, component);
  };

  return component as T & Plugin;
};
