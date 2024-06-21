### How should I name Vue components?

[Basic style guide](https://v3.ru.vuejs.org/style-guide/) <br>
Special rules for the project:

* UiComponentName.vue - These components are entirely simple and cannot use the application environment, such as Vuex, emitter, etc.
* TheComponentName.vue - This component can exist as a single instance on the page and can fully utilize the application environment. It should be as isolated as possible from the parent component whenever possible.
* ViewPageName.vue - This component is a page, can utilize the entire application environment and can initialize server requests.
* PageNameComponentName.vue - This component is a child component of a page, can utilize the application environment, and cannot be used outside the context of the page! 
* LayoutComponentName.vue - This component is a layout, can utilize the entire application environment and can initialize server requests.

### How should I work TS/JS components?
[Basic](https://basarat.gitbook.io/typescript/styleguide) <br>
[Full](https://ts.dev/style/#ts-ignore)

### How should I work SCSS/CSS/HTML components/templates?
[Full](https://codeguide.academy/html-css.html)