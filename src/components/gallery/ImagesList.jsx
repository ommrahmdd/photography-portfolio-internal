import { useState } from "react";

import { db, storage } from "../../firebase/config";

import { collection, deleteDoc, doc } from "firebase/firestore";
import { useFirestoreQuery } from "@react-query-firebase/firestore";

import { Button, Image, message } from "antd";
import { DeleteFilled, StarFilled } from "@ant-design/icons";
import CustomModal from "../customs/CustomModal";
import { handleSuccessMesssage } from "../../helpers/messageComponent";
import { deleteObject, ref } from "firebase/storage";
import NoData from "../NoData";

export default function ImagesList() {
  const galleryCollectionRef = collection(db, "gallery");

  const [messageApi, contextHolder] = message.useMessage();

  const { data, isFetching } = useFirestoreQuery(
    ["gallery"],
    galleryCollectionRef,
    {
      subscribe: true,
    }
  );

  const [isConfirmModalShow, setConfirmModalShow] = useState(false);
  const [isLoadingShow, setLoadingShow] = useState(false);
  const [imgDataForDelete, setImageDataForDelete] = useState(null);

  const handleDeleteImage = () => {
    setConfirmModalShow(false);
    setLoadingShow(true);
    const imageRef = ref(storage, imgDataForDelete?.link);

    deleteObject(imageRef).then(() => {
      let docRef = doc(db, "gallery", imgDataForDelete?.id);

      deleteDoc(docRef)
        .then(() => {
          setLoadingShow(false);
          handleSuccessMesssage({
            messageMethod: messageApi,
            content: "Image deleted successfully",
          });
        })
        .catch(() => setLoadingShow(false));
    });
  };

  if (isFetching) return <LoadingTemplate />;

  return (
    <>
      {!!data?.docs?.length ? (
        <div className="grid grid-cols-1 gap-16 p-10 md:grid-cols-2 lg:grid-cols-4">
          {data?.docs?.map((el, index) => (
            <div key={index}>
              <div
                className="relative transition-all ease-in-out duration-200 p-4 hover:shadow-2xl hover:shadow-cOrange"
                key={index}
              >
                <Image
                  src={el.data().imgSrc}
                  alt="gallery samples"
                  className={`w-full h-full object-fill ${
                    index % 2 === 0
                      ? "rounded-bl-[150px]"
                      : "rounded-tr-[150px]"
                  }`}
                  loading="eager"
                />
                <div className="py-2 pl-9 pr-3 space-x-3  absolute right-0 bottom-0 bg-dark-03 border-cOrange border-2 rounded-tl-full">
                  <StarFilled
                    className="text-lg transition-all duration-200 hover:opacity-70 hover:cursor-pointer"
                    style={{
                      color: el.data().homePage ? "orange" : "white",
                    }}
                    onClick={() => {}}
                  />
                  <DeleteFilled
                    className="text-lg transition-all duration-200 hover:opacity-70 hover:cursor-pointer"
                    style={{
                      color: "#E63946",
                    }}
                    onClick={() => {
                      setImageDataForDelete({
                        id: el.id,
                        link: el.data().imgSrc,
                      });
                      setConfirmModalShow(true);
                    }}
                  />
                </div>
              </div>

              {/* Confirmation modal */}
              <CustomModal
                isModalOpen={isConfirmModalShow}
                setModalOpen={setConfirmModalShow}
                title="Delete Image"
                secondaryText="Are you sure that you want to delete this image ?"
              >
                <>
                  <Button
                    size="middle"
                    className="px-12 font-bold text-cGrey-12 border-none !bg-cOrange hover:!border-none hover:!text-cGrey-12  hover:opacity-65"
                    onClick={() => handleDeleteImage(el?.id)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="middle"
                    className="px-12 font-bold hover:!bg-dark-06 hover:!border-cGrey-12 hover:!text-cGrey-12"
                    onClick={() => setConfirmModalShow(false)}
                  >
                    No
                  </Button>
                </>
              </CustomModal>
            </div>
          ))}
        </div>
      ) : (
        <NoData text="No Images available in gallery" />
      )}

      {contextHolder}
      <CustomModal
        isModalOpen={isLoadingShow}
        setModalOpen={setLoadingShow}
        title="Deleteing Image"
        loading
        iconType="loading"
        isClosable={false}
      />
    </>
  );
}

const LoadingTemplate = () => (
  <div className="grid grid-cols-4 gap-16 p-10">
    {new Array(10).fill().map((_, index) => (
      <div className="animate-pulse" key={index}>
        <div
          class={` bg-slate-200 h-52 w-52 opacity-55 ${
            index % 2 === 0 ? "rounded-bl-[150px]" : "rounded-tr-[150px]"
          }`}
        ></div>
      </div>
    ))}
  </div>
);
