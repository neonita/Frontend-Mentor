const Card = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col gap-8 items-center">
      {icon}
      <h3 className="text-primaryViolet font-headings text-4xl">{title}</h3>
      <p className="text-neutralGrayViolet text-xl text-center leading-[1.5em]">
        {desc}
      </p>
    </div>
  );
};

export default Card;
