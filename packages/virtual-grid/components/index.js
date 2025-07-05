import * as allComponents from './components';
export default {
    install(app) {
        Object.keys(allComponents).forEach((key) => {
            app.use(allComponents[key]);
        });
    },
};
//# sourceMappingURL=index.js.map