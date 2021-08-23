const promptDirectory = require('inquirer-directory');

const componentTypes = {
  REACT_COMPONENT: 'React component',
  CUSTOM_HOOK: 'Custom hook',
  STORE: 'Store',
};

const customHookGenerator = () => ({
  description: componentTypes.CUSTOM_HOOK,
  prompts: [
    {
      type: 'directory',
      name: 'directory',
      message: 'select directory',
      basePath: './src',
    },
    {
      type: 'input',
      name: 'name',
      message: 'hook name',
    },
  ],
  actions: () => [
    {
      type: 'add',
      path: 'src/{{directory}}/{{camelCase name}}/{{camelCase name}}.ts',
      templateFile: 'plop-templates/hook/hook.hbs',
    },
    {
      type: 'add',
      path: 'src/{{directory}}/{{camelCase name}}/index.ts',
      templateFile: 'plop-templates/hook/index.hbs',
    },
    {
      type: 'add',
      path: 'src/{{directory}}/{{camelCase name}}/{{camelCase name}}.test.ts',
      templateFile: 'plop-templates/hook/hook.test.hbs',
    },
  ],
});

const reactComponentGenerator = () => ({
  description: componentTypes.REACT_COMPONENT,
  prompts: [
    {
      type: 'directory',
      name: 'directory',
      message: 'select directory',
      basePath: './src',
    },
    {
      type: 'input',
      name: 'name',
      message: 'component name',
    },
  ],
  actions: () => [
    {
      type: 'add',
      path: `src/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
      templateFile: 'plop-templates/component/Component.hbs',
    },
    {
      type: 'add',
      path: `src/{{directory}}/{{pascalCase name}}/index.ts`,
      templateFile: 'plop-templates/component/index.hbs',
    },
    {
      type: 'add',
      path: `src/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx`,
      templateFile: 'plop-templates/component/Component.test.hbs',
    },
  ],
});

const storeGenerator = () => ({
  description: componentTypes.STORE,
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'store name',
    },
  ],
  actions: () => [
    {
      type: 'add',
      path: 'src/providers/stores/{{camelCase name}}/store.ts',
      templateFile: 'plop-templates/store/store.hbs',
    },
    {
      type: 'add',
      path: 'src/providers/stores/{{camelCase name}}/reducer.ts',
      templateFile: 'plop-templates/store/reducer.hbs',
    },
    {
      type: 'add',
      path: 'src/providers/stores/{{camelCase name}}/interface.ts',
      templateFile: 'plop-templates/store/interface.hbs',
    },
  ],
});

module.exports = (plop) => {
  plop.setPrompt('directory', promptDirectory);
  plop.setGenerator(componentTypes.REACT_COMPONENT, reactComponentGenerator());
  plop.setGenerator(componentTypes.CUSTOM_HOOK, customHookGenerator());
  plop.setGenerator(componentTypes.STORE, storeGenerator());
};
