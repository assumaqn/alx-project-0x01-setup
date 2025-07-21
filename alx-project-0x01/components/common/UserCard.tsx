import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company, address }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-gray-800">{name} (@{username})</h2>
        <p className="text-sm text-gray-600">{email}</p>
      </div>
      <div className="mt-2 text-gray-700">
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Website:</strong> {website}</p>
        <p><strong>Company:</strong> {company.name}</p>
        <p><strong>Address:</strong> {address.city}, {address.street}, {address.suite}</p>
      </div>
    </div>
  );
};

export default UserCard;

