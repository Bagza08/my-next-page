import { useSession } from "next-auth/react";

const Profile = () => {
  const { data }: any = useSession();

  return (
    <div>
      <h1>Profile</h1>
      {data ? <h2>FULLNAME : {data?.user?.fullname}</h2> : null}
    </div>
  );
};

export default Profile;
