import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";

import Home from "./pages/Home";
import { AppLayout } from "./layout";
import Gallery from "./pages/Gallery";
import PageWrapper from "./components/PageWrapper";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Questions from "./pages/Questions";
import Clients from "./pages/Clients";
import SignIn from "./pages/SignIn";
import Organization from "./pages/Organization";
import NotFound from "./pages/static/NotFound";
import Auth from "./components/guards/Auth";
import UnAuth from "./pages/static/UnAuth";

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
      <PageWrapper>
        <UnAuth />
      </PageWrapper>
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
  ]);

  const router = createRouter({
    routeTree,
  });

  return <RouterProvider router={router} />;
}
