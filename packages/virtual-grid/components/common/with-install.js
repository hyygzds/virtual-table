export const withInstall = (component) => {
    const c = component;
    c.install = function (app) {
        app.component(c.name, component);
    };
    return component;
};
//# sourceMappingURL=with-install.js.map