const InputBox = (props) => {
  return (
    <>
      <div>
        <label htmlFor={props.Id} className="block ml-2 text-base">
          {props.Label}
        </label>
        <input
          disabled={props.Disabled}
          className="py-2 block border-2 outline-none placeholder:capitalize mt-2 bg-white disabled:shadow-none shadow-lg disabled:bg-zinc-100 px-4 rounded-md w-full"
          id={props.Id}
          type={props.Type}
          placeholder={props.PlaceHolder}
        />
      </div>
    </>
  );
};

const Profile = () => {
  return (
    <>
      <div className="w-full my-8">
        <div className="container max-w-lg mx-auto px-4">
          <div className="mb-12 text-center">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Account Information
            </h3>
            <p className="text-xs leading-6 text-gray-500">
              Personal details and current year.
            </p>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
