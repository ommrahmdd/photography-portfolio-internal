import { db } from "../../firebase/config";

import { collection } from "firebase/firestore";
import { useFirestoreQuery } from "@react-query-firebase/firestore";

import Loading from "../../pages/static/Loading";

import { Image } from "antd";
import { DeleteFilled, StarFilled } from "@ant-design/icons";

export default function ImagesList() {
  const galleryCollectionRef = collection(db, "gallery");

  const { data, isFetching } = useFirestoreQuery(
    ["gallery"],
    galleryCollectionRef,
    {
      subscribe: true,
    }
  );

  if (isFetching) return <LoadingTemplate />;

  return (
    <>
      <div className="grid grid-cols-4 gap-16 p-10">
        {data?.docs?.map((el, index) => (
          <div
            className="relative transition-all ease-in-out duration-200 p-4 hover:shadow-2xl hover:shadow-cOrange"
            key={index}
          >
            <Image
              src={el.data().imgSrc}
              alt="gallery samples"
              className={`w-full h-full object-fill ${
                index % 2 === 0 ? "rounded-bl-[150px]" : "rounded-tr-[150px]"
              }`}
              loading="eager"
            />
            <div className="py-2 pl-9 pr-3 space-x-3  absolute right-0 bottom-0 bg-dark-03 border-cOrange border-2 rounded-tl-full">
              <StarFilled
                className="text-lg transition-all duration-200 hover:opacity-70 hover:cursor-pointer"
                style={{
                  color: el.data().homePage ? "orange" : "white",
                }}
              />
              <DeleteFilled
                className="text-lg transition-all duration-200 hover:opacity-70 hover:cursor-pointer"
                style={{
                  color: "#E63946",
                }}
              />
            </div>
          </div>
        ))}
      </div>
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
