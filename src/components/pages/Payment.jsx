import { useEffect, useState } from "react";

export default function Payment() {

  const [data, setData] = useState(null);
  const [file, setFile] = useState(null);

  const prices = {
    "Foundation Track | 3 Months": 4999,
    "Applied AI Builder | 4–5 Months": 7999,
    "Corporate Accelerator | 6 Months": 12999
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("formData"));
    if (!stored) window.location.href = "/";
    else setData(stored);
  }, []);

  const handleSubmit = async () => {

    const formData = new FormData();
    Object.keys(data).forEach(k => formData.append(k, data[k]));
    formData.append("payment_proof", file);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await res.json();

    if (result.success) {
      alert("Payment submitted!");
      localStorage.removeItem("formData");
      window.location.href = "/";
    }
  };

  if (!data) return null;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-gray-50 via-white to-blue-50">

      <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-100 shadow-lg p-8 space-y-6 transition hover:shadow-xl">

        {/* HEADER */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Complete Payment
          </h2>
          <div className="w-14 h-[3px] bg-blue-600 rounded mt-2"></div>
        </div>

        {/* USER INFO */}
        <div className="text-sm text-gray-600 space-y-1 bg-white border rounded-lg p-4 shadow-sm">
          <p><span className="font-semibold text-gray-800">Name:</span> {data.name}</p>
          <p><span className="font-semibold text-gray-800">Track:</span> {data.track}</p>

          <p className="text-lg font-bold text-blue-600 mt-2">
            ₹{prices[data.track]}
          </p>
        </div>

        {/* QR SECTION */}
        <div className="text-center space-y-2">
          <div className="bg-white border rounded-xl p-4 shadow-sm inline-block">
            <img src="/qr.png" alt="QR Code" className="w-52 mx-auto" />
          </div>

          <p className="text-sm text-gray-500">
            Scan & Pay via UPI
          </p>
        </div>

        {/* FILE INPUT */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Upload Payment Screenshot
          </label>

          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full text-sm border border-gray-300 rounded-lg p-2 bg-white focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-500 shadow-md hover:opacity-90 transition"
        >
          Submit Payment Proof →
        </button>

      </div>
    </div>
  );
}