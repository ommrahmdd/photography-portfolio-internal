export const handleSuccessMesssage = ({
  messageMethod,
  type = "success",
  content,
}) => {
  messageMethod.open({
    type,
    content,
    style: {
      backgroundColor: "rgb(96, 80, 50)",
    },
  });
};
