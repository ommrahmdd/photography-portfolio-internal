import {
  CloseOutlined,
  Loading3QuartersOutlined,
  LoadingOutlined,
  QuestionCircleFilled,
} from "@ant-design/icons";
import { Button, ConfigProvider, Modal } from "antd";
import React from "react";

export default function CustomModal({
  isModalOpen,
  setModalOpen,
  title,
  secondaryText,
  children,
  loading,
  isClosable = true,
  iconType = "question",
}) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            contentBg: "#131316",
            titleColor: "white",
            headerBg: "#131316",
            boxShadow: "0 4px 10px 0 rgb(96, 80, 50)",
          },
        },
      }}
    >
      <Modal
        open={isModalOpen}
        title={
          <div className="flex justify-center">
            <h6
              className="text-lg text-center mb-5 mt-4 px-10 py-2 capitalize bg-transparent border-dashed border border-cOrange md:text-xl"
              style={{
                clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              {title}
            </h6>
          </div>
        }
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={() => children}
        closable={isClosable}
        mask={isClosable}
        maskClosable={isClosable}
        centered
        className="relative"
        closeIcon={
          <CloseOutlined
            style={{
              color: "rgb(96, 80, 50)",
            }}
          />
        }
      >
        <p className="font-light  mb-10 text-md text-center w-1/2 mx-auto text-cGrey-15 lg:text-lg">
          {secondaryText}
        </p>
        {loading && (
          <div className="flex justify-center">
            <LoadingOutlined
              className="text-5xl"
              style={{
                color: "orange",
              }}
            />
          </div>
        )}

        {iconMapper[iconType]}
      </Modal>
    </ConfigProvider>
  );
}

const iconProps = {
  style: {
    color: "orange",
    opacity: ".15",
  },
  className: "text-8xl absolute z-0 left-10 top-1/2 -translate-y-1/6",
};

const iconMapper = {
  question: <QuestionCircleFilled {...iconProps} />,
  loading: <Loading3QuartersOutlined {...iconProps} />,
};
