import { Controller, FormProvider, useForm } from "react-hook-form";

import { Drawer, Input } from "antd";

import CustomInput from "../customs/CustomInput";
import SubService from "./SubService";
import PrimaryBtn from "../custom-buttons/PrimaryBtn";

import { db } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";

const defaultValues = {
  title: "",
  description: "",
  services: [
    {
      title: "",
      price: "",
      features: [""],
    },
  ],
  images: [],
};

export default function AddEditDrawer({ isDrawerOpen, setDrawerOpen }) {
  const form = useForm({
    defaultValues: defaultValues,
  });

  const {
    formState: { errors },
    control,
    handleSubmit,
    reset,
  } = form;

  const collectionRef = collection(db, "/services");

  const onSubmit = (data) => {
    addDoc(collectionRef, data).then(() => {
      reset(defaultValues, {
        keepDefaultValues: false,
      });

      setDrawerOpen(false);
    });
  };

  return (
    <Drawer
      open={isDrawerOpen}
      onClose={() => setDrawerOpen(false)}
      size="large"
    >
      {/* Title */}
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            label="title"
            isRequired
            errorMessage={errors.title?.message}
          >
            <Controller
              name="title"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </CustomInput>

          {/* Description */}
          <CustomInput
            label="description"
            isRequired
            errorMessage={errors.description?.message}
          >
            <Controller
              name="description"
              control={control}
              render={({ field }) => <Input.TextArea {...field} />}
            />
          </CustomInput>

          <SubService />
          <PrimaryBtn label="Save" type="submit" />
        </form>
      </FormProvider>
    </Drawer>
  );
}
