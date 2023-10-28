const PrimaryBtn = (props) => {
  return (
    <>
      <button
        type={props.Type}
        className={`${props.ExtraClass} hover:bg-white transition bg-accent py-2 px-8 rounded-full font-semibold`}
      >
        Log out
      </button>
    </>
  );
};

export default PrimaryBtn;
