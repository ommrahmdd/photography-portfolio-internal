import { LoadingOutlined } from "@ant-design/icons";
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
          <h6 className="text-lg text-center mb-5 mt-6 capitalize md:text-xl">
            {title}
          </h6>
        }
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={() => children}
        closable={isClosable}
        mask={isClosable}
        maskClosable={isClosable}
        centered
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
      </Modal>
    </ConfigProvider>
  );
}
