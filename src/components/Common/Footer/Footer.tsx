import { FaDiscord, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <section
      aria-label="footer"
      className="lg:px-32 px-10 py-5 lg:space-y-5 space-y-10"
    >
      <div className="flex justify-between items-center border-b border-slate-500 text-white py-5">
        <h1>Your logo</h1>
        <div>Content here</div>
      </div>
      <aside
        aria-label="content"
        className="lg:flex lg:flex-row lg:gap-x-5 lg:space-y-0 space-y-10"
      >
        <div className="basis-3/6 space-y-4">
          <h1 className="font-bold text-4xl text-white">V1flix</h1>
          <div className="text-opacity-70 text-white">
            <p>Copyright ©V1fix. All rights reserved.</p>
            <p>
              This site does not store any files on its server. All contents are
              provided by non-affiliated third parties.
            </p>
          </div>
          <div className="text-white space-y-4">
            <h2 className="text-xl">Communities</h2>
            <div className="flex gap-x-10 text-2xl">
              <div className="hover:text-secondColor hover:cursor-pointer">
                <FaDiscord />
              </div>
              <div className="hover:text-secondColor hover:cursor-pointer">
                <FaYoutube />
              </div>
              <div className="hover:text-secondColor hover:cursor-pointer">
                <FaFacebook />
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/6 text-white lg:text-2xl text-base">Help</div>
        <div className="basis-1/6 text-white lg:text-2xl text-base">FAQ</div>
        <div className="basis-1/6 text-white lg:text-2xl text-base">Terms</div>
      </aside>
    </section>
  );
};

export default Footer;
