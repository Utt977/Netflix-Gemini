import { useSelector } from "react-redux";

function UserDetails() {
  const user = useSelector((store) => store.user);
  return (
    <div className="flex flex-col items-center bg-[#141414] text-white p-6 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3 mx-auto mt-8 border border-gray-700">
      <h4 className="text-2xl font-bold mb-2">{user.displayName}</h4>
      <h5 className="text-lg">{user.email}</h5>
    </div>
  );
}

export default UserDetails;
