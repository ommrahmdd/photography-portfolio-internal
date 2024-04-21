import NotFoundIcon from "../../../assets/icons/NotFoundIcon";

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col bg-dark-08 justify-center items-center">
      <NotFoundIcon />
      <h4 className="text-cGrey-15 my-10 capitalize font-light text-2xl md:text-5xl lg:text-7xl">
        Not found page
      </h4>
    </div>
  );
}
