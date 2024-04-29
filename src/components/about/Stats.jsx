import React from "react";
import PrimaryBtn from "../custom-buttons/PrimaryBtn";
import { Controller, useForm } from "react-hook-form";
import { Drawer, Form, Input, Typography } from "antd";
import { useStore } from "../../state/store";

export default function AboutStats() {
  const { statsDrawerOpen, setStatsDrawerOpen } = useStore();

  const {
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      yearsOfExp: 0,
      happyClients: 0,
      photoAwards: 0,
      intShoots: 0,
      socialMediaFollowers: 0,
    },
  });

  return (
    <div>
      <div className="flex justify-between items-center">
        <h6 className="text-2xl font-light lg:text-5xl">Satistics</h6>
        <PrimaryBtn label="Edit" onClick={setStatsDrawerOpen} />
      </div>

      <Drawer
        title="About statistics"
        open={statsDrawerOpen}
        onClose={setStatsDrawerOpen}
      >
        <Form>
          {/* yearsOfExp */}
          <div className="">
            <Typography.Title level={5} className="font-light capitalize">
              Years of experince
            </Typography.Title>
            <Controller
              name="yearsOfExp"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </div>
        </Form>
      </Drawer>
    </div>
  );
}
