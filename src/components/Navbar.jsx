import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-emerald-100">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <div className="flex items-center">
          <h2 className="text-3xl font-bold">
            Avijit <span className="text-emerald-600">Biswas</span>
          </h2>
          <img
            src="https://avatars.githubusercontent.com/u/52578734?v=4&size=64"
            alt="Avijit"
            className="rounded-full object-contain h-8 w-8"
          />
        </div>

        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
