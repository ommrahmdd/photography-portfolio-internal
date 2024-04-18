import React, { useState } from "react";

import { useNavigate } from "@tanstack/react-router";

import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

import { Cart, Chat, Coffee, Folder, Home, Users } from "../../assets/icons";

import "./styles.scss";

export default function SidebarLayout() {
  const [isCollapsed, setCollapse] = useState(false);

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
