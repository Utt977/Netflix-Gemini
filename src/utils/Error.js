import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const reloadButton = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-center ">
      <div className="w-96 h-56 p-5  shadow-lg rounded-lg flex justify-center flex-col">
        <h1 className="font-bold text-3xl text-black-600 py-4 ">
          Something went wrong
        </h1>
        <p className="font-bold text-x text-center">Have another go</p>
        <button
          className="bg-green-400 rounded-full py-2 text-white font-bold"
          onClick={reloadButton}
        >
          Reload
        </button>
      </div>
    </div>
  );
};

export default Error;
