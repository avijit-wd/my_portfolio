import love from "../assets/love.svg";

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-x-1 h-16 bg-slate-700 text-white">
      <span className="font-normal text-gray-400"> Made with</span>{" "}
      <img src={love} alt="love" className="h-3 w-3" />
      <span className="font-normal text-gray-400"> by Avijit</span>{" "}
      <span className="font-normal text-gray-400">@2025</span>{" "}
    </div>
  );
};
export default Footer;
