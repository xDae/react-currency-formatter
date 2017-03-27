import { configure, addDecorator, setAddon } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options'
import infoAddon from '@kadira/react-storybook-addon-info';

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
