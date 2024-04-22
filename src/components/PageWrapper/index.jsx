import { useLayoutEffect, useRouterState } from "@tanstack/react-router";

import { useUser } from "@clerk/clerk-react";

import { Cirecles } from "../../assets/images";
import CustomSignIn from "../CustomSignIn";
import { ROUTES } from "../../constants/ROUTES";

import homePage from "./../../assets/images/homePage.jpg";
import clientsPage from "./../../assets/images/clientsPage.jpg";
import questionsPage from "./../../assets/images/questionsPage.jpg";
import galleryPage from "./../../assets/images/galleryPage.jpg";
import workPage from "./../../assets/images/workPage.jpg";
import servicesPage from "./../../assets/images/servicesPage.jpg";
import orgPage from "./../../assets/images/orgPage.jpg";
import { Alert } from "antd";
import { ROLES } from "../../constants/Roles";

const pathnameMapper = {
  [ROUTES.home]: {
    title: "Home",
    imgName: homePage,
    description: "",
  },
  [ROUTES.clients]: {
    title: "Clients",
    imgName: clientsPage,
    description: "",
  },
  [ROUTES.questions]: {
    title: "Questions",
    imgName: questionsPage,
    description: "",
  },
  [ROUTES.gallery]: {
    title: "gallery",
    imgName: galleryPage,
    description: "",
  },
  [ROUTES.work]: {
    title: "work",
    imgName: workPage,
    description: "",
  },
  [ROUTES.services]: {
    title: "services",
    imgName: servicesPage,
    description: "",
  },
  [ROUTES.org]: {
    title: "members",
    imgName: orgPage,
    description: "",
  },
};

export default function PageWrapper({ children }) {
  const router = useRouterState();

  const { user } = useUser();

  return router.location.pathname.split("/")[1] === "" ? (
    <Template>{children}</Template>
  ) : user ? (
    <Template>{children}</Template>
  ) : (
    <CustomSignIn />
  );
}

const Template = ({ children }) => {
  const { user } = useUser();

  const userRole = user?.organizationMemberships[0]?.role;

  const router = useRouterState();

  const pathname = router.location.pathname.split("/")[1];

  const currentPage = pathnameMapper[pathname];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative p-8 bg-dark-08 min-h-screen text-cGrey-12">
      {userRole !== ROLES.admin && (
        <Alert
          message={
            <p className="text-md font-semibold">
              Note! Only Admin have the full control of dashboard
            </p>
          }
          type="warning"
          showIcon
          className="mb-5"
        />
      )}
      <div className={`mb-10 w-full h-96 relative`}>
        <img
          src={currentPage?.imgName}
          alt="background"
          className="absolute top-0 left-0 w-full h-full z-0 object-cover object-center grayscale blur-sm"
        />
        <h2
          className="text-4xl text-cGrey-30 capitalize z-10 absolute top-1/2 -translate-y-1/2 left-7 bg-cOrange bg-opacity-75 p-2 md:text-9xl"
          style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "black",
            clipPath: "content-box",
          }}
        >
          {currentPage?.title}
        </h2>
      </div>

      <div className="relative z-10">{children}</div>

      {/* Page background */}
      <div className="absolute bottom-0 right-0 opacity-15  ">
        <Cirecles />
      </div>
    </div>
  );
};
