import { createWebHistory, createRouter } from "vue-router";
import List from './components/list.vue';
import detail from './components/detail.vue';
import author from './components/author.vue';
import comment from './components/comment.vue';

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id",
    component: detail,
	children: [
		{
			path: 'author',
			component: author
		},
		{
			path: 'comment',
			component: comment
		}
	]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
