import * as ShuiUiComponents from "./components";

const components = Object.values(ShuiUiComponents);

const install = (app: any) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

// 自动注册
//@ts-expect-error
if (typeof window !== "undefined" && window.Vue) {
  //@ts-expect-error
  install(window.Vue);
}

const ShuiUI = {
  install,
};

export default ShuiUI;

export * from "./components";