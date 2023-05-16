import './bootstrap';
import { createApp } from 'vue';
import PublicNavBar from './components/public/NavBar.vue';

const app = createApp({});

app.component('publicNavBar', PublicNavBar);

app.mount('#app');
