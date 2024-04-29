import { useEffect } from "react";

import { Drawer, Input, Typography, message } from "antd";

import { useStore } from "../../state/store";

import { z } from "zod";

import { db } from "../../firebase/config";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

import { Controller, useForm } from "react-hook-form";

import PrimaryBtn from "../custom-buttons/PrimaryBtn";
import { handleSuccessMesssage } from "../../helpers/messageComponent";
import SecondaryBtn from "../custom-buttons/SecondaryBtn";
import { usePermissions } from "../../hooks/usePermissions";

const defaultValues = {
  question: "",
  answer: "",
};

export default function AddQuestion() {
  const {
    isFormDrawerOpen,
    openDrawer,
    closeDrawer,
    dataForEdit,
    setEditData,
  } = useStore((state) => state);

  const { canCreate } = usePermissions();

  const questionsRef = collection(db, "/questions");

  const [messageApi, contextHolder] = message.useMessage();

  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    defaultValues,
  });

  const handleActionCallback = ({ content }) => {
    reset(defaultValues, { keepDefaultValues: false });
    closeDrawer();
    handleSuccessMesssage({
      content,
      messageMethod: messageApi,
    });
  };

  const handleOnSubmit = (data) => {
    if (!!Object.keys(dataForEdit).length) {
      const docRef = doc(db, "questions", dataForEdit?.id);
      updateDoc(docRef, {
        ...data,
      }).then(() => {
        handleActionCallback({
          content: "Question has been updated successfully",
        });
      });
    } else
      addDoc(questionsRef, data).then(() => {
        handleActionCallback({
          content: "Question has been added successfully",
        });
      });
  };

  useEffect(() => {
    reset(
      {
        answer: dataForEdit?.answer,
        question: dataForEdit?.question,
      },
      {
        keepDefaultValues: false,
      }
    );
  }, [dataForEdit, reset]);

  return (
    <div>
      <div className="flex justify-between items-center flex-col space-y-5 lg:flex-row lg:space-y-0">
        <h6 className="capitalize text-cGrey-25 font-light text-2xl lg:text-4xl">
          Adding new questions
        </h6>
        {canCreate && <PrimaryBtn onClick={openDrawer} label="Add new" />}
      </div>
      {contextHolder}
      <Drawer
        open={isFormDrawerOpen}
        onClose={() =>
          setEditData({
            isFormDrawerOpen: false,
            dataForEdit: {},
          })
        }
        size="large"
        title={!!Object.keys(dataForEdit).length ? "Update QA" : "Add new QA"}
      >
        <form className="space-y-8" onSubmit={handleSubmit(handleOnSubmit)}>
          <div>
            <Typography.Title level={5} className="font-light capitalize">
              Question
            </Typography.Title>
            <Controller
              name="question"
              control={control}
              render={({ field }) => <Input.TextArea autoSize {...field} />}
            />
            {errors.question && (
              <Typography.Text type="danger">
                {errors.question.message}
              </Typography.Text>
            )}
          </div>

          <div>
            <Typography.Title level={5} className="font-light capitalize">
              answer
            </Typography.Title>

            <Controller
              name="answer"
              control={control}
              render={({ field }) => <Input.TextArea autoSize {...field} />}
            />
            {errors.answer && (
              <Typography.Text type="danger">
                {errors.answer.message}
              </Typography.Text>
            )}
          </div>

          <div className="my-4 flex justify-end items-center space-x-3">
            <SecondaryBtn
              label={"Cancel"}
              onClick={() =>
                setEditData({
                  isFormDrawerOpen: false,
                  dataForEdit: {},
                })
              }
            />
            <PrimaryBtn
              label={
                !!Object.keys(dataForEdit).length ? "Update QA" : "Add Question"
              }
              type="submit"
            />
          </div>
        </form>
      </Drawer>
    </div>
  );
}
