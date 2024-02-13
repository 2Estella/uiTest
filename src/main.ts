import './assets/main.css';
import './styles/main.css';

import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import './styles/transition.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);


app.mount('#app');
