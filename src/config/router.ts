import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  NavigationGuardNext,
} from 'vue-router';
import { isAuthenticated } from 'utils/cookie';
import { middlewarePipeline } from './middlewares';

const DashboardPage = () => import('pages/DashboardPage');
const PageError = () => import('pages/ErrorPage');
const TutorialPage = () => import('pages/TutorialPage');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DashboardPage,
      beforeEnter: (to, from, next) => {
        if (!isAuthenticated()) {
          // Go to sign in page
          // windowRedirect(`${APP_URL}/sign-in`);
        }
        next();
      },
      children: [
        {
          path: '/',
          name: 'tutorial',
          component: TutorialPage,
        },
      ],
    },
    { path: '/404', name: '404', component: PageError },
    { path: '/403', name: '403', component: PageError },
    { path: '/500', name: '500', component: PageError },
    { path: '/:catchAll(.*)', name: 'PageNotFound', component: PageError },
  ],
});

router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
  ) => {
    if (!to.meta.middleware) {
      return next();
    }

    const middleware = to.meta.middleware as Record<number, App.Any>;
    const isLoggedIn = isAuthenticated();
    const context: App.RouteContext = { to, from, next, isLoggedIn };

    return middleware[0]({
      ...context,
      next: middlewarePipeline(context, middleware, 1),
    });
  },
);

export default router;
