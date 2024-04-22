import { LoadingOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Modal } from "antd";
import React from "react";

export default function CustomModal({
  isModalOpen,
  setModalOpen,
  Buttons,
  title,
  secondaryText,
  children,
  loading,
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
      {/* <Button
        size="middle"
        className="px-12 font-bold hover:!bg-dark-06 hover:!border-cGrey-12 hover:!text-cGrey-12"
        onClick={() => setModalShow(false)}
      >
        Ok
      </Button> */}
      <Modal
        open={isModalOpen}
        title={
          <h6 className="text-center mb-10 mt-4 capitalize">Uploading image</h6>
        }
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={() => children}
        closable
        mask
        maskClosable
        centered
      >
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
