import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";

import { AppLayout } from "./layout";
import PageWrapper from "./components/PageWrapper";
import {
  Work,
  Clients,
  Gallery,
  Home,
  Organization,
  Questions,
  Services,
  SignIn,
} from "./pages";
import NotFound from "./pages/static/NotFound";
import Auth from "./components/guards/Auth";
import UnAuth from "./pages/static/UnAuth";
import ValidateUnAuth from "./components/ValidateUnAuth";
import About from "./pages/About";

export default function AppRoutes() {
  const RootComp = () => (
    <div className="space-x-5">
      <AppLayout>
        <Outlet />
      </AppLayout>
    </div>
  );

  const rootRoute = createRootRoute({
    component: RootComp,
    notFoundComponent: NotFound,
    wrapInSuspense: true,
    errorComponent: NotFound,
  });

  const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => (
      <PageWrapper>
        <Home />
      </PageWrapper>
    ),
  });

  const galleryRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/gallery",
    component: () => (
      <PageWrapper>
        <Gallery />
      </PageWrapper>
    ),
  });

  const servicesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/services",
    component: () => (
      <PageWrapper>
        <Services />
      </PageWrapper>
    ),
  });

  const workRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/work",
    component: () => (
      <PageWrapper>
        <Work />
      </PageWrapper>
    ),
  });

  const questionsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/questions",
    component: () => (
      <PageWrapper>
        <Questions />
      </PageWrapper>
    ),
  });

  const clientRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/clients",
    component: () => (
      <PageWrapper>
        <Clients />
      </PageWrapper>
    ),
  });

  const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/about",
    component: () => (
      <PageWrapper>
        <About />
      </PageWrapper>
    ),
  });

  const signInRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/signIn",
    component: () => (
      <PageWrapper>
        <SignIn />
      </PageWrapper>
    ),
  });

  const orgRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/org",
    component: () => (
      <Auth>
        <PageWrapper>
          <Organization />
        </PageWrapper>
      </Auth>
    ),
  });

  const unAuthRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/unAuth",
    component: () => (
      <ValidateUnAuth>
        <PageWrapper>
          <UnAuth />
        </PageWrapper>
      </ValidateUnAuth>
    ),
  });

  const routeTree = rootRoute.addChildren([
    galleryRoute,
    homeRoute,
    servicesRoute,
    workRoute,
    questionsRoute,
    clientRoute,
    signInRoute,
    orgRoute,
    unAuthRoute,
    aboutRoute,
  ]);

  const router = createRouter({
    routeTree,
  });

  return <RouterProvider router={router} />;
}
