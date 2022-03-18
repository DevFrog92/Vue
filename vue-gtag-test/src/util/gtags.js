import { event, } from 'vue-gtag';

export const gtag_selfAuthentication = () => {
  event('self_authentication', {
    auth_label: 'person',
    debug_mode: true,
  });
};
