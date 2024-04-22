import { useState } from "react";

import Dragger from "antd/es/upload/Dragger";
import { Form, message } from "antd";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";

import { v4 } from "uuid";
import uploadImage from "./../../assets/images/uploadFile.png";
import CustomModal from "../customs/CustomModal";

export default function UploadImageSection() {
  const [isLoadingModalShow, setLoadingModalShow] = useState(false);

  const galleryCollectionRef = collection(db, "gallery");

  const [messageApi, contextHolder] = message.useMessage();

  const handleSuccessMessage = () => {
    messageApi.open({
      type: "success",
      content: "Image has been uploaded",
    });
  };

  const hanleAddDocument = (url) => {
    addDoc(galleryCollectionRef, {
      homePage: false,
      imgSrc: url,
    }).then((e) => {
      setLoadingModalShow(false);
      handleSuccessMessage();
    });
  };

  const uploadHandler = ({ imgName, image }) => {
    setLoadingModalShow(true);
    let imageRef = ref(storage, `gallery/${imgName + v4()}`);

    uploadBytes(imageRef, image, {
      contentType: image.type,
    })
      .then((e) => {
        getDownloadURL(e.ref).then((url) => {
          hanleAddDocument(url);
        });
      })
      .catch((err) => {
        setLoadingModalShow(false);
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

  return (
    <div className="my-10">
      <Form>
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
            <p className=" text-cGrey-15 text-2xl">
              Click or drag file to this area to upload
            </p>
            <p className=" text-cGrey-15">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </div>
        </Dragger>
      </Form>

      {contextHolder}
      {/* Loading modal */}
      <CustomModal
        isModalOpen={isLoadingModalShow}
        setModalOpen={setLoadingModalShow}
        loading
        title="Uploading image"
        iconType="loading"
        isClosable={false}
      />
    </div>
  );
}
