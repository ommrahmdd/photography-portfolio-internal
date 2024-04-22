import { FrownFilled } from "@ant-design/icons";

export default function NoData({ text = "No Data available" }) {
  return (
    <div className="py-20 flex flex-col justify-center items-center space-y-10">
      <FrownFilled className="text-7xl text-cOrange md:text-9xl lg:text-10xl" />
      <p className="text-xl text-cGrey-12 capitalize font-light md:text-2xl lg:text-4xl">
        {text}
      </p>
    </div>
  );
}
