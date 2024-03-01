import React from "react";

const getUser = (email, username, referralId, mobileNumber, country) => ({
  email,
  username,
  referralId,
  mobileNumber,
  country,
});

const users = [
  getUser("test1@gmail.com", "test", "123", "32423432432", "India"),
  getUser("test2@gmail.com", "test1", "1223", "42423432432", "India"),
];

const UserRow = ({ data }) => {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <div>
        <p>{data?.email}</p>
      </div>
      <div>
        <p>{data?.fullName}</p>
      </div>
      <div>
        <p>{data?.username}</p>
      </div>
      <div>
        <p>{data?.referralId}</p>
      </div>
      <div>
        <p>{data?.mobileNumber}</p>
      </div>
      <div>
        <p>{data?.country}</p>
      </div>
    </div>
  );
};
const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      {users?.map((user) => (
        <UserRow key={user?.email} data={user} />
      ))}
    </div>
  );
};

export default Dashboard;
