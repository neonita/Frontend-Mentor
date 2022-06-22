const Card = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col gap-8 md:gap-6 items-center md:items-start">
      {icon}
      <h3 className="text-primaryViolet font-headings text-4xl md:text-3xl md:mt-6">
        {title}
      </h3>
      <p className="text-neutralGrayViolet text-xl md:text-base text-center md:text-left leading-[1.5em]">
        {desc}
      </p>
    </div>
  );
};

export default Card;
