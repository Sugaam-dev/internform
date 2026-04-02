import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profile: "",
    org: "",
    role: "",
    track: "",
    experience: "",
    skills: "",
    links: "",
    why: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 px-4 py-10 text-gray-900">

      <div className="max-w-6xl mx-auto space-y-6">

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-6 p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-100 shadow-md hover:shadow-lg transition">

          <div>
            <p className="text-gray-500 text-sm mb-2">
              PMRG Solution | Innovate to Elevate
            </p>

            <h1 className="text-4xl font-bold leading-tight">
              AI / ML & <span className="text-blue-600">Agentic AI</span><br />
              Internship Program
            </h1>

            <p className="mt-4 text-gray-600">
              For final-year engineering students, fresh graduates, and professionals ready to become job-ready AI builders.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-3 py-1 text-sm font-semibold rounded-full bg-blue-50 text-blue-600">3–6 Months</span>
              <span className="px-3 py-1 text-sm font-semibold rounded-full bg-green-50 text-green-600">Certification</span>
              <span className="px-3 py-1 text-sm font-semibold rounded-full bg-orange-50 text-orange-600">Live Projects</span>
              <span className="px-3 py-1 text-sm font-semibold rounded-full bg-purple-50 text-purple-600">Hiring Pathway</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <h2 className="font-semibold mb-3">Program Snapshot</h2>
            <div className="w-16 h-[3px] bg-green-500 rounded mb-3"></div>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>Tracks for students and professionals</li>
              <li>Python, ML, LLMs, APIs</li>
              <li>Hands-on capstone projects</li>
              <li>Career-ready training</li>
            </ul>
          </div>

        </section>

        {/* GRID */}
        <section className="grid md:grid-cols-2 gap-6">

          {/* LEFT */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-100 shadow-md hover:shadow-lg transition">
            <h2 className="font-semibold text-lg">Who This Program Is For</h2>
            <div className="w-14 h-[3px] bg-blue-600 rounded my-2"></div>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>Final-year engineering students</li>
              <li>Fresh graduates</li>
              <li>Developers transitioning to AI</li>
              <li>Working professionals</li>
              <li>Teams integrating AI into workflows</li>
            </ul>

            <p className="mt-4 text-sm text-gray-600">
              This program bridges the gap between academic learning and real-world AI implementation.
            </p>
          </div>

          {/* RIGHT */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-100 shadow-md hover:shadow-lg transition">
            <h2 className="font-semibold text-lg">Program Tracks</h2>
            <div className="w-14 h-[3px] bg-green-500 rounded my-2"></div>

            <div className="space-y-4">

              <div className="p-4 rounded-xl border bg-white shadow-sm hover:shadow-md transition">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-50 text-blue-600">3 Months</span>
                <h3 className="font-semibold mt-2">Foundation Track</h3>
                <p className="text-sm text-gray-600">Python, ML basics, SQL, APIs</p>
              </div>

              <div className="p-4 rounded-xl border bg-white shadow-sm hover:shadow-md transition">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-50 text-green-600">4–5 Months</span>
                <h3 className="font-semibold mt-2">Applied AI Builder</h3>
                <p className="text-sm text-gray-600">LLM apps, RAG, deployment</p>
              </div>

              <div className="p-4 rounded-xl border bg-white shadow-sm hover:shadow-md transition">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-orange-50 text-orange-600">6 Months</span>
                <h3 className="font-semibold mt-2">Corporate Accelerator</h3>
                <p className="text-sm text-gray-600">Enterprise AI systems</p>
              </div>

            </div>
          </div>

          {/* EXTRA */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-100 shadow-md hover:shadow-lg transition">
            <h2 className="font-semibold text-lg">Core Curriculum</h2>
            <div className="w-14 h-[3px] bg-purple-500 rounded my-2"></div>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>Python, ML, Deep Learning</li>
              <li>NLP and LLMs</li>
              <li>RAG & Agent workflows</li>
              <li>APIs, SQL, GitHub</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-100 shadow-md hover:shadow-lg transition">
            <h2 className="font-semibold text-lg">What You Get</h2>
            <div className="w-14 h-[3px] bg-orange-500 rounded my-2"></div>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>Certification</li>
              <li>Letter of recommendation</li>
              <li>Interview preparation</li>
              <li>Project portfolio</li>
            </ul>

            <div className="mt-4 p-3 rounded-lg bg-gray-100 border text-sm font-semibold">
              Internship-ready. Project-ready. Career-ready.
            </div>
          </div>

        </section>

        {/* FORM */}
        <section className="p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-100 shadow-md">

          <h2 className="text-xl font-semibold mb-2">
            Apply for the Internship Program
          </h2>
          <div className="w-16 h-[3px] bg-blue-600 rounded mb-6"></div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">

            <input name="name" placeholder="Full Name" onChange={handleChange} className="input" />
            <input name="email" placeholder="Email Address" onChange={handleChange} className="input" />

            <input name="phone" placeholder="Phone Number" onChange={handleChange} className="input" />

            <select name="profile" onChange={handleChange} className="input">
              <option>Final-year engineering student</option>
              <option>Fresh graduate</option>
              <option>Working professional</option>
              <option>Corporate nominee</option>
            </select>

            <input name="org" placeholder="College / Company" onChange={handleChange} className="input" />
            <input name="role" placeholder="Degree / Role" onChange={handleChange} className="input" />

            <select name="track" onChange={handleChange} className="input">
              <option>Foundation Track | 3 Months</option>
              <option>Applied AI Builder | 4–5 Months</option>
              <option>Corporate Accelerator | 6 Months</option>
            </select>

            <select name="experience" onChange={handleChange} className="input">
              <option>Student</option>
              <option>0–1 years</option>
              <option>1–3 years</option>
              <option>3+ years</option>
            </select>

            <input name="skills" placeholder="Skills" className="input col-span-full" onChange={handleChange} />
            <input name="links" placeholder="LinkedIn / GitHub" className="input col-span-full" onChange={handleChange} />

            <textarea name="why" placeholder="Why do you want to join?" className="input col-span-full" onChange={handleChange}></textarea>

            <button className="col-span-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-md hover:opacity-90">
              Continue to Payment →
            </button>

          </form>
        </section>

      </div>

      {/* Tailwind reusable input */}
      <style>{`
        .input {
          padding: 12px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          background: white;
        }
        .input:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37,99,235,0.1);
        }
      `}</style>

    </div>
  );
}