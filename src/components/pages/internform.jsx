import { useState } from "react";

export default function Internform() {

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

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email is required";
    if (!formData.phone.match(/^[0-9]{10}$/))
      newErrors.phone = "Enter valid 10-digit phone number";
    if (!formData.profile) newErrors.profile = "Select profile";
    if (!formData.track) newErrors.track = "Select track";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    const formPayload = new FormData();
    Object.keys(formData).forEach((key) =>
      formPayload.append(key, formData[key])
    );
    formPayload.append("access_key", "a6f56a4a-961b-4f96-ae51-1b97dd256d29");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formPayload,
    });

    const result = await res.json();

    setLoading(false);

    if (result.success) {
      setShowPopup(true);
      setFormData({
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
    }
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

        {/* FORM CARD */}
        <div className="bg-gradient-to-br from-white to-gray-100 border border-gray-200 rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-gray-900">
            Apply for the Internship Program
          </h2>
          <div className="w-16 h-[3px] bg-blue-600 rounded mt-2 mb-6"></div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">

            {/* NAME */}
            <div>
              <input name="name" value={formData.name} onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500" />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* EMAIL */}
            <div>
              <input name="email" value={formData.email} onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-200" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* PHONE */}
            <div>
              <input name="phone" value={formData.phone} onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-200" />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            {/* PROFILE */}
            <div>
              <select name="profile" value={formData.profile} onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-200">
                <option value="">Select Profile</option>
                <option>Final-year engineering student</option>
                <option>Fresh graduate</option>
                <option>Working professional</option>
                <option>Corporate nominee</option>
              </select>
              {errors.profile && <p className="text-red-500 text-sm">{errors.profile}</p>}
            </div>

            {/* ORG */}
            <input name="org" value={formData.org} onChange={handleChange}
              placeholder="College / Company"
              className="w-full p-3 border rounded-lg" />

            {/* ROLE */}
            <input name="role" value={formData.role} onChange={handleChange}
              placeholder="Degree / Role"
              className="w-full p-3 border rounded-lg" />

            {/* TRACK */}
            <div>
              <select name="track" value={formData.track} onChange={handleChange}
                className="w-full p-3 border rounded-lg">
                <option value="">Select Track</option>
                <option>Foundation Track | 3 Months</option>
                <option>Applied AI Builder | 4–5 Months</option>
                <option>Corporate Accelerator | 6 Months</option>
              </select>
              {errors.track && <p className="text-red-500 text-sm">{errors.track}</p>}
            </div>

            {/* EXPERIENCE */}
            <select name="experience" value={formData.experience} onChange={handleChange}
              className="w-full p-3 border rounded-lg">
              <option>Student</option>
              <option>0–1 years</option>
              <option>1–3 years</option>
              <option>3+ years</option>
            </select>

            {/* FULL WIDTH */}
            <input name="skills" value={formData.skills} onChange={handleChange}
              placeholder="Skills"
              className="w-full p-3 border rounded-lg col-span-full" />

            <input name="links" value={formData.links} onChange={handleChange}
              placeholder="LinkedIn / GitHub"
              className="w-full p-3 border rounded-lg col-span-full" />

            <textarea name="why" value={formData.why} onChange={handleChange}
              placeholder="Why do you want to join?"
              className="w-full p-3 border rounded-lg col-span-full" />

            {/* BUTTON */}
            <button
              disabled={loading}
              className="col-span-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow hover:opacity-90"
            >
              {loading ? "Submitting..." : "Submit Application →"}
            </button>

          </form>
        </div>
      </div>

      {/* ✅ SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-xl p-8 max-w-md w-full text-center shadow-xl">

            <h3 className="text-xl font-bold mb-2">✅ Application Submitted</h3>

            <p className="text-gray-600 text-sm">
              Your form has been submitted successfully.
              <br /><br />
              Visit:
              <br />
              <a href="https://www.pmrgsolution.com/" target="_blank"
                className="text-blue-600 font-semibold">
                www.pmrgsolution.com
              </a>
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
}