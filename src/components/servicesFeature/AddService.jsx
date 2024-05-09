import React, { useState } from "react";
import PageHeader from "../../layout/PageHeader";
import AddEditDrawer from "./AddEditDrawer";

export default function AddService() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const addBtnHanlder = () => {
    setDrawerOpen(true);
  };

  return (
    <div>
      <PageHeader
        title="Add new service"
        btn
        btnLabel="Add"
        btnHandler={addBtnHanlder}
      />
      <AddEditDrawer
        isDrawerOpen={isDrawerOpen}
        setDrawerOpen={setDrawerOpen}
      />
    </div>
  );
}
