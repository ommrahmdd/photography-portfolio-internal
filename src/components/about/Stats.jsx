import { useEffect } from "react";

import { useStore } from "../../state/store";

import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

import { Controller, useForm } from "react-hook-form";

import { Drawer, InputNumber, Statistic, message } from "antd";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import CustomInput from "../customs/CustomInput";
import PrimaryBtn from "../custom-buttons/PrimaryBtn";

import "./style.scss";
import { handleSuccessMesssage } from "../../helpers/messageComponent";

const statsTextMapper = {
  yearsOfExp: "Years of experince",
  happyClients: "happy Clients",
  photoAwards: "photos awards",
  intShoots: "internaional Shoots",
  socialMediaFollowers: "social Media Followers",
};

const validationSchema = z.object({
  yearsOfExp: z.number({
    required_error: "Years of experience is required field",
    invalid_type_error: "Enter valid number",
  }),
  photoAwards: z.number(),
  happyClients: z.number(),
});

export default function AboutStats() {
  const { statsDrawerOpen, setStatsDrawerOpen, setStatsDrawerClose } =
    useStore();
  const aboutRef = collection(db, "/aboutStats");

  const [messageApi, contextHolder] = message.useMessage();

  const { data, isLoading } = useFirestoreQuery(["aboutStats"], aboutRef, {
    subscribe: true,
  });

  const {
    formState: { errors },
    control,
    handleSubmit,
    reset,
    getValues,
  } = useForm({
    defaultValues: {
      yearsOfExp: 0,
      happyClients: 0,
      photoAwards: 0,
      intShoots: 0,
      socialMediaFollowers: 0,
    },
    resolver: zodResolver(validationSchema),
  });

  const handleOnSubmit = () => {
    const docRef = doc(db, "aboutStats", data?.docs?.[0]?.id);
    updateDoc(docRef, {
      ...getValues(),
    }).then(() => {
      setStatsDrawerClose();
      handleSuccessMesssage({
        messageMethod: messageApi,
        content: "Statistics updated successfully",
      });
    });
  };

  useEffect(() => {
    reset(
      {
        ...data?.docs?.[0].data(),
      },
      { keepDefaultValues: false }
    );
  }, [reset, data]);

  return (
    <div>
      {contextHolder}
      <div className="flex justify-between items-center pb-5 border-b-2 border-cOrange border-opacity-35">
        <h6 className="text-2xl font-light lg:text-5xl">Satistics</h6>
        <PrimaryBtn label="Edit" onClick={setStatsDrawerOpen} />
      </div>

      <div className="grid grid-cols-5 my-10 gap-10">
        {Object.keys(statsTextMapper).map((key, idx) => (
          <div
            className="border border-collapse border-cOrange p-5 rounded-md rounded-tr-full rounded-br-full"
            key={idx}
          >
            <Statistic
              title={statsTextMapper[key]}
              value={getValues()[key]}
              loading={isLoading}
              style={{
                textTransform: "capitalize",
              }}
            />
          </div>
        ))}
      </div>

      <Drawer
        title="About statistics"
        open={statsDrawerOpen}
        onClose={setStatsDrawerClose}
        size="default"
      >
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          {/* yearsOfExp */}
          <CustomInput
            isRequired
            label="Years of experince"
            errorMessage={errors.yearsOfExp?.message}
          >
            <Controller
              name="yearsOfExp"
              control={control}
              render={({ field }) => <InputNumber min={0} {...field} />}
            />
          </CustomInput>

          {/* happyClients */}
          <CustomInput
            label="happy Clients"
            errorMessage={errors.happyClients?.message}
          >
            <Controller
              name="happyClients"
              control={control}
              render={({ field }) => <InputNumber min={0} {...field} />}
            />
          </CustomInput>

          {/* photoAwards */}
          <CustomInput
            label="photos awards"
            errorMessage={errors.photoAwards?.message}
          >
            <Controller
              name="photoAwards"
              control={control}
              render={({ field }) => <InputNumber min={0} {...field} />}
            />
          </CustomInput>

          {/* intShoots */}
          <CustomInput
            label="internaional Shoots"
            errorMessage={errors.intShoots?.message}
          >
            <Controller
              name="intShoots"
              control={control}
              render={({ field }) => <InputNumber min={0} {...field} />}
            />
          </CustomInput>

          {/* socialMediaFollowers */}
          <CustomInput
            label="social Media Followers"
            errorMessage={errors.socialMediaFollowers?.message}
          >
            <Controller
              name="socialMediaFollowers"
              control={control}
              render={({ field }) => <InputNumber min={0} {...field} />}
            />
          </CustomInput>

          <PrimaryBtn type="submit" label="Edit" />
        </form>
      </Drawer>
    </div>
  );
}
