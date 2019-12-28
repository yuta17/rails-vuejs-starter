import Vue from "vue";

const mount = components => {
  document.addEventListener("DOMContentLoaded", () => {
    let templates = document.querySelectorAll("[data-vue]");

    for (let el of templates) {
      console.log(el);
      const data = {
        render: createElement => {
          const context = {
            props: { ...el.dataset }
          };
          return createElement(components[el.dataset.vue], context);
        }
      };
      let app = new Vue(data);
      app.$mount(el);
    }
  });
};

export { mount };
