import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

import { HeaderLayout, SidebarLayout } from "./../index";
import FooterLayout from "../Footer";

export default function AppLayout({ children }) {
  return (
    <Layout className="min-h-screen">
      <HeaderLayout />
      <Layout>
        <SidebarLayout />
        <Content>{children}</Content>
      </Layout>
      <FooterLayout />
    </Layout>
  );
}
