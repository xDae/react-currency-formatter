import { configure, addDecorator, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options'
import infoAddon from '@storybook/react-addon-info';

setAddon(infoAddon);;

setOptions({
  name: 'react currency formatter',
  url: 'https://github.com/kadirahq/storybook-addon-options',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false
});

configure(() => require('./stories'), module);
