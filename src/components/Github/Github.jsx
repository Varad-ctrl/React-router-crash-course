import { useEffect, useState } from "react";

function Github() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Varad-ctrl')
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(err => console.log(err));
  }, []);

  if (!data) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  return (
    <div className="text-center m-4 bg-gray-700 text-white p-6 text-2xl rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4">GitHub Profile</h2>

      <img
        src={data.avatar_url}
        alt="Github profile"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />

      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Username:</strong> {data.login}</p>
      <p><strong>Followers:</strong> {data.followers}</p>
      <p><strong>Public Repos:</strong> {data.public_repos}</p>
    </div>
  );
}

export default Github;