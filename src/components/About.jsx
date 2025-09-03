import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Love to have coffee and code. While sipping my favorite brew, I
            enjoy solving problems, building web applications, and learning new
            technologies to improve my skills every day. With more than 4 years
            of experience working on various complex project, gained a good grip
            in this domain to tackle every situation in product development and
            deployment cycle to deliver the excellence.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
