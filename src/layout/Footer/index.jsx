import { Footer } from "antd/es/layout/layout";
import TextLogo from "../../components/TextLogo";
import { Email, Texting } from "../../assets/icons";

export default function FooterLayout() {
  return (
    <Footer className="bg-dark-08 border-t border-cGrey-03 text-cGrey-20  px-20">
      {/* First row */}
      <div className="py-10 flex flex-col md:flex-row md:justify-between md:items-center">
        <TextLogo size="lg" />
        <div className="">
          <h5 className="text-xl mb-3">Contact me</h5>
          <ul className="font-extralight text-md space-y-2">
            <li className="flex items-center space-x-3">
              <Texting />
              <span>010-2627-1970</span>
            </li>
            <li className="flex items-center space-x-3">
              <Email />
              <span>ommrahmdd@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Second row */}
      <p className="text-center">
        Made with all love by{" "}
        <a
          href="https://ommrahmdd.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="font-bold"
        >
          Omar A.Youssef
        </a>
      </p>
    </Footer>
  );
}
