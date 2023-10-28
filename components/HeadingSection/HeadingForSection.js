const HeadingForSection = (props) => {
  return (
    <>
      <div className="w-10 h-2 bg-accent rounded-full mb-1"></div>
      <span className="text-white font-semibold text-xl sm:text-3xl">
        {props.Name}
      </span>
    </>
  );
};

export default HeadingForSection;
