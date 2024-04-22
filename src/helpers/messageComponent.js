export const handleSuccessMesssage = ({
  messageMethod,
  type = "successs",
  content,
}) => {
  messageMethod.open({
    type,
    content,
  });
};
