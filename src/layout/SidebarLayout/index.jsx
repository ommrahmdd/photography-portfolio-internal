import React, { useState } from "react";

import { useNavigate } from "@tanstack/react-router";

import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

import {
  Cart,
  Chat,
  Coffee,
  Folder,
  Home,
  Setting,
  Users,
} from "../../assets/icons";

import "./styles.scss";
import { useUser } from "@clerk/clerk-react";
import { ROLES } from "../../constants/Roles";

export default function SidebarLayout() {
  const [isCollapsed, setCollapse] = useState(false);

  const { user } = useUser();
  const userRole = user?.organizationMemberships[0]?.role;
  const isAdmin = userRole === ROLES.admin;

  const navigate = useNavigate();

  const items = [
    {
      key: "",
      label: <span className="mx-2 capitalize">Home</span>,
      icon: <Home />,
    },
    {
      key: "gallery",
      label: <span className="mx-2 capitalize">Gallery</span>,
      icon: <Folder />,
    },
    {
      key: "services",
      label: <span className="mx-2 capitalize">Services</span>,
      icon: <Cart />,
    },
    {
      key: "work",
      label: <span className="mx-2 capitalize">work</span>,
      icon: <Coffee />,
    },
    {
      key: "clients",
      label: <span className="mx-2 capitalize">clients</span>,
      icon: <Users />,
    },
    {
      key: "questions",
      label: <span className="mx-2 capitalize">questions</span>,
      icon: <Chat />,
    },

    user && isAdmin
      ? {
          key: "org",
          label: <span className="mx-2 capitalize">Organization</span>,
          icon: <Setting />,
        }
      : {},
  ];

  return (
    <Sider
      className="!bg-dark-08"
      collapsed={isCollapsed}
      onCollapse={(value) => setCollapse(value)}
      collapsible
      collapsedWidth={70}
    >
      <Menu
        theme="dark"
        defaultSelectedKeys={[""]}
        mode="inline"
        items={items}
        onClick={(e) => navigate({ to: `/${e.key}` })}
        style={{ lineHeight: "64px" }}
      />
    </Sider>
  );
}
