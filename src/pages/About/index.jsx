import React from "react";
import AboutStats from "../../components/about/Stats";
import Info from "../../components/about/Info";

export default function About() {
  return (
    <div className="space-y-28">
      <AboutStats />
      <Info />
    </div>
  );
}
