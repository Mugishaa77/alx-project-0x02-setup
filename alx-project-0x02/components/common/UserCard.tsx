import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-gray-700">Email: {email}</p>
      <p className="text-gray-500 text-sm mt-2">
        Address: {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
