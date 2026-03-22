function About() {
  const features = ["React Router", "Tailwind CSS", "Reusable Components"];

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">About Us</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;