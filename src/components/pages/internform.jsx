import { useState } from "react";

export default function Internform() {
  const [showPopup, setShowPopup] = useState(false);

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
              <li>✦ Tracks for students and professionals</li>
              <li>✦ Python, ML, LLMs, APIs</li>
              <li>✦ Hands-on capstone projects</li>
              <li>✦ Career-ready training</li>
            </ul>
          </div>
        </section>

        {/* GRID */}
        <section className="grid md:grid-cols-2 gap-6">

          {/* Who This Is For */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-100 shadow-md hover:shadow-lg transition">
            <h2 className="font-semibold text-lg">Who This Program Is For</h2>
            <div className="w-14 h-[3px] bg-blue-600 rounded my-2"></div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✦ Final-year engineering students</li>
              <li>✦ Fresh graduates</li>
              <li>✦ Developers transitioning to AI</li>
              <li>✦ Working professionals</li>
              <li>✦ Teams integrating AI into workflows</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              This program bridges the gap between academic learning and real-world AI implementation.
            </p>
          </div>

          {/* Program Tracks */}
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

          {/* Core Curriculum */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-100 shadow-md hover:shadow-lg transition">
            <h2 className="font-semibold text-lg">Core Curriculum</h2>
            <div className="w-14 h-[3px] bg-purple-500 rounded my-2"></div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✦ Python, ML, Deep Learning</li>
              <li>✦ NLP and LLMs</li>
              <li>✦ RAG & Agent workflows</li>
              <li>✦ APIs, SQL, GitHub</li>
            </ul>
          </div>

          {/* What You Get */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-100 shadow-md hover:shadow-lg transition">
            <h2 className="font-semibold text-lg">What You Get</h2>
            <div className="w-14 h-[3px] bg-orange-500 rounded my-2"></div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✦ Certification</li>
              <li>✦ Letter of recommendation</li>
              <li>✦ Interview preparation</li>
              <li>✦ Project portfolio</li>
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

          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScj9S7hR4SRfRBLM5kJSAkaHkeHmyJ39oveNAGQ40mjQAW2pA/viewform?embedded=true"
            width="100%"
            height="950"
            style={{ border: "none", margin: 0 }}
            className="rounded-xl"
            title="Internship Application Form"
          >
            Loading…
          </iframe>

          {/* Submit button to trigger popup */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 mb-3">
              After submitting the form above, click below to confirm:
            </p>
            <button
              onClick={() => setShowPopup(true)}
              className="px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow hover:opacity-90 transition"
            >
              I've Submitted My Application ✓
            </button>
          </div>
        </div>

      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl mx-4">

            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✅</span>
            </div>

            <h3 className="text-xl font-bold mb-2 text-gray-900">Application Submitted!</h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Thank you for applying to the PMRG Solution Internship Program.
              <br /><br />
              Our team will review your application and get back to you shortly.
              <br /><br />
              In the meantime, visit us at:
              <br />
              <a
                href="https://www.pmrgsolution.com/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                www.pmrgsolution.com
              </a>
            </p>

            <div className="flex gap-3 mt-6 justify-center">
              <a
                href="https://www.pmrgsolution.com/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:opacity-90 transition"
              >
                Visit Website
              </a>
              <button
                onClick={() => setShowPopup(false)}
                className="px-5 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold text-sm hover:bg-gray-200 transition"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}