import { useEffect, useState } from "react";

import { useStore } from "../../state/store";

import { db, storage } from "../../firebase/config";
import { doc, updateDoc } from "firebase/firestore";

import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Drawer, Image, Input, Typography, message } from "antd";

import CustomInput from "../customs/CustomInput";
import PrimaryBtn from "../custom-buttons/PrimaryBtn";
import SecondaryBtn from "../custom-buttons/SecondaryBtn";
import { regex } from "../../constants/regex";
import CustomModal from "../customs/CustomModal";
import { handleSuccessMesssage } from "../../helpers/messageComponent";
import Dragger from "antd/es/upload/Dragger";

import uploadImage from "./../../assets/images/uploadFile.png";
import { v4 } from "uuid";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { DeleteFilled } from "@ant-design/icons";

const validationSchema = z.object({
  introduction: z.string().min(1),
  biography: z.string().min(1),
  email: z.string().min(1).email(),
  mobile: z
    .string()
    .min(1)
    .regex(regex.mobile, { message: "Enter valid mobile number" }),
  facebook: z.string().min(1).url(),
  instagram: z.string().min(1).url(),
  coverImage: z.string().min(1, { message: "Cover image required" }),
});

export default function InfoDrawer({ drawerData }) {
  const { infoDrawerOpen, setInfoDrawerClose } = useStore();

  const [isLoading, setLoading] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      introduction: "",
      biography: "",
      facebook: "",
      instagram: "",
      email: "",
      mobile: "",
      coverImage: null,
    },
    resolver: zodResolver(validationSchema),
  });

  const handleOnSubmit = (data) => {
    setLoading(true);
    const docRef = doc(db, "aboutInfo", drawerData?.id);

    updateDoc(docRef, getValues())
      .then(() => {
        setInfoDrawerClose();
        setLoading(false);
        handleSuccessMesssage({
          content: "About information has been updated successfully",
          messageMethod: messageApi,
        });
      })
      .catch(() => {
        setLoading(false);
      });
  };

  console.log("ddddddddddddddd", getValues());

  const uploadHandler = ({ imgName, image }) => {
    setLoading(true);
    let imageRef = ref(storage, `about/${imgName + v4()}`);

    uploadBytes(imageRef, image, {
      contentType: image.type,
    })
      .then((e) => {
        getDownloadURL(e.ref).then((url) => {
          setLoading(false);
          setValue("coverImage", url);
        });
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const props = {
    name: "file",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        uploadHandler({
          image: info.file?.originFileObj,
          imgName: info.file?.name,
        });
      }
    },
  };

  const deleteImage = () => {
    const storageRef = ref(storage, getValues().coverImage);
    deleteObject(storageRef).then(() => {
      const docRef = doc(db, "aboutInfo", drawerData?.id);

      updateDoc(docRef, {
        ...getValues(),
        coverImage: "",
      });
    });
  };

  useEffect(() => {
    reset(
      {
        ...drawerData,
      },
      { keepDefaultValues: false }
    );
  }, [drawerData, reset]);

  return (
    <Drawer open={infoDrawerOpen} onClose={setInfoDrawerClose} size="large">
      {contextHolder}
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <CustomInput
          label="Introduction"
          isRequired
          errorMessage={errors.introduction?.message}
        >
          <Controller
            name="introduction"
            control={control}
            render={({ field }) => <Input.TextArea {...field} />}
          />
        </CustomInput>

        <CustomInput
          label="biography"
          isRequired
          errorMessage={errors.biography?.message}
        >
          <Controller
            name="biography"
            control={control}
            render={({ field }) => <Input.TextArea {...field} />}
          />
        </CustomInput>

        <CustomInput
          label="email"
          isRequired
          errorMessage={errors.email?.message}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </CustomInput>

        <CustomInput
          label="mobile"
          isRequired
          errorMessage={errors.mobile?.message}
        >
          <Controller
            name="mobile"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </CustomInput>

        <CustomInput
          label="facebook"
          isRequired
          errorMessage={errors.facebook?.message}
        >
          <Controller
            name="facebook"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </CustomInput>

        <CustomInput
          label="instagram"
          isRequired
          errorMessage={errors.instagram?.message}
        >
          <Controller
            name="instagram"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </CustomInput>

        <div className="">
          <p className="text-lg mb-4 font-semibold">Cover image</p>
        </div>
        {getValues().coverImage ? (
          <div className="flex justify-between items-center">
            <Image src={getValues().coverImage} width={200} />
            <DeleteFilled
              className="transition-all ease-in-out duration-200 text-xl cursor-pointer hover:opacity-30"
              style={{
                color: "red",
              }}
              onClick={deleteImage}
            />
          </div>
        ) : (
          <>
            <Dragger
              {...props}
              showUploadList={false}
              accept={"image/png,image/gif,image/jpeg,image/jpg"}
              style={{
                borderColor: "rgb(96, 80, 50)",
              }}
            >
              <div className="space-y-5 py-2">
                <div className="flex justify-center">
                  <img src={uploadImage} alt="" />
                </div>
                <p className="text-2xl text-cOrange">
                  Click or drag file to this area to upload
                </p>
                <p className="text-cOrange">
                  Support for a single or bulk upload. Strictly prohibited from
                  uploading company data or other banned files.
                </p>
              </div>
            </Dragger>
            {errors?.coverImage && (
              <Typography.Text type="danger">
                {errors?.coverImage?.message}
              </Typography.Text>
            )}
          </>
        )}

        <div className="flex justify-end items-end space-x-3 my-10">
          <PrimaryBtn type="submit" label="Edit" />
          <SecondaryBtn label="Cancel" onClick={setInfoDrawerClose} />
        </div>
      </form>

      <CustomModal
        loading
        title="Updating about information"
        isModalOpen={isLoading}
      />
    </Drawer>
  );
}
