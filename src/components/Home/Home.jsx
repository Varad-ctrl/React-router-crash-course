import { useNavigate, Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-8 h-[70vh]">

      <div className="bg-white shadow-xl rounded-2xl p-8 text-center max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">
          Welcome 🚀
        </h2>

        <p className="text-gray-600 mb-6">
          Learn React Router with navigation & dynamic routing.
        </p>

        {/* 🔹 Programmatic Navigation */}
        <button
          onClick={() => navigate("/about")}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition mb-4"
        >
          Go to About
        </button>

        {/* 🔹 Link Navigation */}
        <div className="flex flex-col gap-2 mt-4">

          <Link
            to="/contact"
            className="text-blue-500 hover:underline"
          >
            Go to Contact
          </Link>

          <Link
            to="/github"
            className="text-blue-500 hover:underline"
          >
            View GitHub Profile
          </Link>

          {/* 🔥 Dynamic Route Example */}
          <Link
            to="/user/101"
            className="text-green-600 font-semibold hover:underline"
          >
            Go to User 101
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Home;