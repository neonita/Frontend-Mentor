import FamilyImgMobile from "../assets/images/image-intro-mobile.jpg";
import FamilyImgDesktop from "../assets/images/image-intro-desktop.jpg";
import PatternIntroLeftMobile from "../assets/images/bg-pattern-intro-left-mobile.svg";
import PatternIntroRightMobile from "../assets/images/bg-pattern-intro-right-mobile.svg";
import PatternIntroLeftDesktop from "../assets/images/bg-pattern-intro-left-desktop.svg";
import PatternIntroRightDesktop from "../assets/images/bg-pattern-intro-right-desktop.svg";

const Hero = () => {
  return (
    <main>
      <img
        className="block sm:hidden w-screen h-auto"
        src={FamilyImgMobile}
        alt="A family on a walk"
      />
      <img
        className="hidden sm:block"
        src={FamilyImgDesktop}
        alt="A family on a walk"
      />

      <article className="bg-primaryViolet flex flex-col items-center gap-5 py-32 px-10 text-center relative">
        <h2 className="text-6xl text-neutralGray font-headings font-normal relative z-10">
          Humanizing your insurance
        </h2>
        <p className="text-[18px] text-neutralGray text-center leading-8 px-6 mb-6 opacity-80 ">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button
          href="/"
          className="text-neutralGray bg-primaryViolet tracking-widest uppercase py-2 px-7 border-2 border-neutralGray hover:bg-neutralGray hover:text-primaryViolet transition ease-in-out duration-200"
        >
          View plans
        </button>

        <img
          className="block md:hidden absolute top-0 left-0 w-2/4 z-0"
          src={PatternIntroLeftMobile}
          alt="intro left mobile pattern"
        />
        <img
          className="block md:hidden absolute -bottom-60 right-0 w-1/3"
          src={PatternIntroRightMobile}
          alt="intro right mobile pattern"
        />
      </article>
    </main>
  );
};

export default Hero;
