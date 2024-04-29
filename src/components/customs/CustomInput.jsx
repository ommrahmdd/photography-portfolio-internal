import { Typography } from "antd";
import React from "react";

export default function CustomInput({
  label,
  errorMessage,
  children,
  isRequired,
}) {
  return (
    <div className="mb-5">
      <Typography.Title level={5} className="font-light capitalize space-x-2">
        {label}{" "}
        {isRequired && <Typography.Text type="danger">*</Typography.Text>}
      </Typography.Title>
      <div className="block"> {children}</div>
      {errorMessage && (
        <Typography.Text type="danger">{errorMessage}</Typography.Text>
      )}
    </div>
  );
}
