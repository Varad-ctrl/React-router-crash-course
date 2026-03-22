import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name}! Message received.`);
    setForm({ name: "", message: "" });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="border p-2 rounded-lg"
        />

        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          className="border p-2 rounded-lg"
        />

        <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;