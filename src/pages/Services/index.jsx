import React from "react";
import { ServicesList, AddService } from "@components/servicesFeature";

export default function Services() {
  return (
    <div className="space-y-20">
      <AddService />
      <ServicesList />
    </div>
  );
}
