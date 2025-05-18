import React, { useState } from "react";

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    location: "",
    jobType: "",
    applicationDate: "",
    appliedOn: "",
    hrName: "",
    hrEmail: "",
    referralContact: "",
    resumeUsed: "",
    jobDescriptionLink: "",
    status: "",
    interviewStage: "",
    followUpDate: "",
    deadline: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw5dlzJG2lqapIuKCLibifQVS4u9chbCewo8h7gwd8QMtqfmkyEGbfzAaaX28PIbKreTQ/exec",
        {
          method: "POST",
          body: form,
        }
      );

      const result = await response.json();
      if (result.status === "success") {
        alert("Application submitted successfully!");
        setFormData({
          role: "",
          company: "",
          location: "",
          jobType: "",
          applicationDate: "",
          appliedOn: "",
          hrName: "",
          hrEmail: "",
          referralContact: "",
          resumeUsed: "",
          jobDescriptionLink: "",
          status: "",
          interviewStage: "",
          followUpDate: "",
          deadline: "",
          notes: "",
        });
      } else {
        alert("Error: " + result.message);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
  };

  const formClass = "input input-bordered w-full";
  const labelClass = "label-text font-medium";

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-box p-10">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          📄 Job Application Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Grid Layout for Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              [
                "role",
                "Role",
                "select",
                ["Frontend Dev", "Backend Dev", "MERN", "c++"],
              ],
              ["company", "Company"],
              [
                "location",
                "Location",
                "select",
                ["On-site", "Remote", "Hybrid"],
              ],
              [
                "jobType",
                "Job Type",
                "select",
                ["Full-time", "Internship", "Part-time", "Contract"],
              ],
              ["applicationDate", "Application Date", "date"],
              ["appliedOn", "Applied On (LinkedIn, Website, etc.)"],
              ["hrName", "HR / Recruiter Name"],
              ["hrEmail", "HR Email", "email"],
              ["referralContact", "Referral Contact"],
              ["resumeUsed", "Resume Used"],
              ["jobDescriptionLink", "Job Description Link", "url"],
              [
                "status",
                "Application Status",
                "select",
                ["Applied", "In Progress", "Interviewing", "Offer", "Rejected"],
              ],
              [
                "interviewStage",
                "Interview Stage",
                "select",
                [
                  "Applied",
                  "Phone Screen",
                  "Assignment Round",
                  "Coding Round",
                  "Onsite",
                  "Final",
                ],
              ],
              ["followUpDate", "Follow-Up Date", "date"],
              ["deadline", "Application Deadline", "date"],
            ].map(([name, label, type = "text", options]) => (
              <div className="form-control" key={name}>
                <label className="label">
                  <span className={labelClass}>{label}</span>
                </label>
                {type === "select" ? (
                  <select
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="select select-bordered"
                  >
                    <option value="">Select {label}</option>
                    {options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={label}
                    className={formClass}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Notes Field Full Width */}
          <div className="form-control">
            <label className="label">
              <span className={labelClass}>Notes / Comments</span>
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              placeholder="Any extra info, progress, or follow-ups..."
              className="textarea textarea-bordered"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button type="submit" className="btn btn-primary btn-wide text-lg">
              🚀 Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
