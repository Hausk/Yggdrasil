import './bootstrap';
import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faChevronDown, faChevronUp, faUserGear } from '@fortawesome/free-solid-svg-icons'

import PublicNavBar from './components/public/NavBar.vue';

/* add icons to the library */
library.add(faChevronDown, faChevronUp, faUserGear);
const app = createApp({});

app.component('publicNavBar', PublicNavBar);
app.component('fontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
