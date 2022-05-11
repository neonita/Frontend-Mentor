import FamilyImgMobile from "../assets/images/image-intro-mobile.jpg";
import FamilyImgDesktop from "../assets/images/image-intro-desktop.jpg";
import PatternIntroLeftMobile from "../assets/images/bg-pattern-intro-left-mobile.svg";
import PatternIntroRightMobile from "../assets/images/bg-pattern-intro-right-mobile.svg";
import PatternIntroLeftDesktop from "../assets/images/bg-pattern-intro-left-desktop.svg";
import PatternIntroRightDesktop from "../assets/images/bg-pattern-intro-right-desktop.svg";

const Hero = () => {
  return (
    <main className="relative">
      <img
        className="block md:hidden w-screen h-auto"
        src={FamilyImgMobile}
        alt="A family on a walk"
      />

      <article
        className="bg-primaryViolet md:flex items-center gap-3 py-32 px-10 
      md:px-12 lg:px-20 xl:px-40 relative md:static md:max-h-[550px] md:py-16"
      >
        {/* line above header */}
        <section className="flex flex-col items-center md:items-start gap-5">
          <div className="hidden md:block bg-white h-[1px] w-[9em] mb-6" />
          <h2 className="text-6xl text-neutralGray font-headings font-normal relative z-10 text-center md:text-left">
            Humanizing your insurance.
          </h2>
          <p className="text-[18px] text-neutralGray text-center md:text-left leading-8 px-6 md:px-0 mb-6 md:mb-0 opacity-80 relative z-10">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <button
            href="/"
            className="text-neutralGray bg-primaryViolet tracking-widest uppercase py-2 px-7 border-2 border-neutralGray hover:bg-neutralGray hover:text-primaryViolet transition ease-in-out duration-200 relative z-10"
          >
            View plans
          </button>
        </section>

        <img
          className="hidden md:block w-1/2 h-auto relative top-36 lg:top-16 xl:top-36"
          src={FamilyImgDesktop}
          alt="A family on a walk"
        />

        {/* Mobile intro patterns */}
        <img
          className="block md:hidden absolute top-0 left-0 w-2/4 z-0"
          src={PatternIntroLeftMobile}
          alt="intro left mobile pattern"
        />
        <img
          className="block md:hidden absolute -bottom-60 right-0 w-1/3 z-0"
          src={PatternIntroRightMobile}
          alt="intro right mobile pattern"
        />

        {/* Desktop intro patterns */}
        <img
          className="hidden md:block w-36 h-auto absolute left-0 -bottom-56"
          src={PatternIntroLeftDesktop}
          alt="intro left desktop pattern"
        />
        <img
          className="hidden md:block min-w-12 w-96 h-auto absolute right-0 top-0"
          src={PatternIntroRightDesktop}
          alt="intro right desktop pattern"
        />
      </article>
    </main>
  );
};

export default Hero;
