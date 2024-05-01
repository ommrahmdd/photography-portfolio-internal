import { collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useFirestoreQuery } from "@react-query-firebase/firestore";

import { useStore } from "../../state/store";

import PrimaryBtn from "../custom-buttons/PrimaryBtn";
import InfoDrawer from "./InfoDrawer";
import { Image } from "antd";

export default function Info() {
  const { setInfoDrawerOpen } = useStore();

  const aboutRef = collection(db, "/aboutInfo");
  const { data } = useFirestoreQuery(["aboutInfo"], aboutRef, {
    subscribe: true,
  });

  const about = data?.docs?.[0].data();

  return (
    <div>
      <div className="flex justify-between items-center pb-5 border-b-2 border-opacity-35 border-cOrange">
        <h6 className="text-2xl font-light lg:text-5xl">Information</h6>
        <PrimaryBtn label="Edit" onClick={setInfoDrawerOpen} />
      </div>

      {/* ------------------------------- Info */}
      <div className="px-4 py-8 space-y-16">
        <TextTemplate
          title="Cover image"
          text={
            <Image
              src={about?.coverImage}
              className="!w-screen !h-64 !object-cover !rounded-2xl"
            />
          }
        />
        <TextTemplate title="Introduction" text={about?.introduction} />
        <TextTemplate title="biography" text={about?.biography} />
        <TextTemplate
          title="Contact information"
          text={
            <ul className="list-disc px-4">
              {[
                about?.email,
                about?.mobile,
                about?.facebook,
                about?.instagram,
                about?.linkedin,
              ].map((el, idx) => (
                <li key={idx}>{el}</li>
              ))}
            </ul>
          }
        />
      </div>

      {/* ------------------------------- Drawer */}
      <InfoDrawer
        drawerData={{
          ...about,
          id: data?.docs?.[0].id,
        }}
      />
    </div>
  );
}

const TextTemplate = ({ title, text }) => (
  <div className="space-y-3">
    <h6 className="text-3xl font-light capitalize text-cGrey-25">{title}</h6>
    <p className="w-5/6 text-lg px-5 tracking-wide text-cGrey-15">{text}</p>
  </div>
);
