import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  redirect,
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
  let as = true;

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

  const routeTree = rootRoute.addChildren([
    galleryRoute,
    homeRoute,
    servicesRoute,
    workRoute,
    questionsRoute,
    clientRoute,
  ]);

  const router = createRouter({
    routeTree,
  });

  return <RouterProvider router={router} />;
}
