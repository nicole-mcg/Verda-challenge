import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Story from './views/Story.vue';
import Cat from './views/Cat.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cats',
      name: 'cat',
      component: Cat,
    },
    {
      path: '/story/:storyId?',
      name: 'story',
      props: true,
      component: Story,
    },
  ],
});
