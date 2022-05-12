import CTAPattern from "../assets/images/bg-pattern-how-we-work-mobile.svg";
import Card from "./Card";

const Thunder = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86">
    <g fill="none" fill-rule="evenodd">
      <circle cx="43" cy="43" r="43" fill="#96A9C6" />
      <path
        fill="#FFF"
        fill-rule="nonzero"
        d="M32 59h1.195l21.072-20.146c.276-.356.123-.534-.46-.534H45.11l9.158-10.786c.276-.356.061-.534-.612-.534h-11.67c-.337 0-.613.119-.888.356l-8.515 14.645c-.061.356.122.534.582.534h8.423L32 59z"
      />
    </g>
  </svg>
);

const Dollar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86">
    <g fill="none" fill-rule="evenodd">
      <circle cx="43" cy="43" r="43" fill="#96A9C6" />
      <path
        fill="#FFF"
        fill-rule="nonzero"
        d="M43 27c-8.836 0-16 7.164-16 16s7.164 16 16 16c8.838 0 16-7.164 16-16s-7.162-16-16-16zm4.363 22.178c-.787.883-1.924 1.402-3.41 1.558V53H42.06v-2.252c-2.479-.254-4.012-1.695-4.604-4.32l2.93-.764c.271 1.65 1.17 2.475 2.695 2.475.713 0 1.24-.176 1.576-.53a1.79 1.79 0 00.504-1.279c0-.518-.168-.91-.504-1.176-.336-.267-1.084-.605-2.242-1.015-1.04-.362-1.855-.717-2.441-1.073a4.032 4.032 0 01-1.428-1.48c-.365-.637-.549-1.379-.549-2.223 0-1.107.328-2.105.98-2.992.653-.885 1.68-1.426 3.083-1.623V33h1.894v1.748c2.117.254 3.488 1.451 4.111 3.594l-2.609 1.07c-.51-1.469-1.295-2.203-2.361-2.203-.535 0-.965.164-1.287.492a1.636 1.636 0 00-.487 1.194c0 .476.157.841.47 1.097.31.254.98.569 2.003.946 1.125.41 2.008.798 2.647 1.164a4.16 4.16 0 011.533 1.513c.38.645.572 1.397.572 2.258 0 1.322-.395 2.424-1.182 3.305z"
      />
    </g>
  </svg>
);

const Person = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86">
    <g fill="none" fill-rule="evenodd">
      <circle cx="43" cy="43" r="43" fill="#96A9C6" />
      <path
        fill="#FFF"
        fill-rule="nonzero"
        d="M52.874 49.874l-5.095-2.547c-.48-.24-.779-.724-.779-1.261v-1.804c.122-.149.25-.32.383-.507.661-.933 1.19-1.972 1.576-3.093a2.116 2.116 0 001.241-1.929V36.6c0-.514-.192-1.011-.533-1.4v-2.837c.03-.293.147-2.04-1.116-3.48C47.455 27.633 45.678 27 43.267 27c-2.412 0-4.19.634-5.285 1.883-1.263 1.44-1.145 3.187-1.115 3.48V35.2a2.127 2.127 0 00-.534 1.4v2.133c0 .65.295 1.255.799 1.658.488 1.935 1.51 3.392 1.868 3.86v1.765c0 .516-.282.99-.734 1.237l-4.758 2.596A4.81 4.81 0 0031 54.073V55.8c0 2.531 8.024 3.2 12.267 3.2 4.242 0 12.266-.669 12.266-3.2v-1.623a4.786 4.786 0 00-2.659-4.303z"
      />
    </g>
  </svg>
);

const Information = () => {
  const infos = {
    process: {
      title: "Snappy Processs",
      description:
        "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
    },
    price: {
      title: "Affordable Prices",
      description:
        "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    },
    people: {
      title: "People First",
      description:
        "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
    },
  };

  return (
    <section
      className="flex flex-col items-center justify-center gap-16 py-40 px-10 
      md:px-12 lg:px-20 xl:px-40"
    >
      <div className="bg-neutralGrayViolet h-[1px] w-[12em] " />

      <h2 className="text-[3.8em] text-primaryViolet font-headings font-normal text-center md:text-left mb-8">
        We're different
      </h2>
      <Card
        icon={<Thunder />}
        title={infos.process.title}
        desc={infos.process.description}
      />
      <Card
        icon={<Dollar />}
        title={infos.price.title}
        desc={infos.price.description}
      />
      <Card
        icon={<Person />}
        title={infos.people.title}
        desc={infos.people.description}
      />

      {/* cta card */}
      <section className="bg-primaryViolet w-full h-fit py-28 flex flex-col gap-10 justify-center items-center relative mt-32">
        <h2 className="text-neutralGray text-[3.5rem] px-8 font-headings text-center leading-[1.1em] relative z-10">
          Find out more about how we work
        </h2>
        <button className="text-neutralGray bg-primaryViolet tracking-widest uppercase py-[.7em] px-10 border-2 border-neutralGray hover:bg-neutralGray hover:text-primaryViolet transition ease-in-out duration-200 relative z-10 text-xl font-bold">
          How we work
        </button>
        <img
          className="absolute top-0 right-0 z-0 h-full"
          src={CTAPattern}
          alt="Call to action's mobile pattern"
        />
      </section>
    </section>
  );
};

export default Information;
