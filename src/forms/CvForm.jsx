import { useFormContext } from "../context/FormContext";
import FormInput from "../components/FormInput";
import FormTextarea from "../components/FormTextarea";
import SectionDivider from "../components/SectionDivider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CvForm() {
  const { cvData, setCvData } = useFormContext();
  const navigate = useNavigate();

  const [localData, setLocalData] = useState({
    fullName: "",
    email: "",
    phone: "",
    profile: "",
    workHistory: [{ organization: "", position: "", duration: "", description: "" }],
    education: [{ institution: "", degree: "", year: "" }],
    publications: [""],
  });

  const handleChange = (e) => {
    setLocalData({ ...localData, [e.target.name]: e.target.value });
  };

  const addWork = () => {
    setLocalData((prev) => ({
      ...prev,
      workHistory: [...prev.workHistory, { organization: "", position: "", duration: "", description: "" }],
    }));
  };

  const addEducation = () => {
    setLocalData((prev) => ({
      ...prev,
      education: [...prev.education, { institution: "", degree: "", year: "" }],
    }));
  };

  const addPublication = () => {
    setLocalData((prev) => ({
      ...prev,
      publications: [...prev.publications, ""],
    }));
  };

  const updatePublication = (index, value) => {
    const updated = [...localData.publications];
    updated[index] = value;
    setLocalData({ ...localData, publications: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCvData(localData);
    navigate("/preview/cv");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-white dark:bg-zinc-900 rounded-xl shadow-md mt-10 mb-10">
      <h1 className="text-3xl font-bold text-zinc-800 dark:text-white mb-6">Create Your CV</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Info */}
        <SectionDivider title="Personal Information" />
        <FormInput label="Full Name" name="fullName" value={localData.fullName} onChange={handleChange} />
        <FormInput label="Email" name="email" value={localData.email} onChange={handleChange} />
        <FormInput label="Phone" name="phone" value={localData.phone} onChange={handleChange} />
        <FormTextarea label="Profile Summary" name="profile" value={localData.profile} onChange={handleChange} />

        {/* Work History */}
        <SectionDivider title="Work History" />
        {localData.workHistory.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg space-y-4 border border-zinc-200 dark:border-zinc-700"
          >
            <FormInput
              label="Organization"
              value={item.organization}
              onChange={(e) => {
                const copy = [...localData.workHistory];
                copy[index].organization = e.target.value;
                setLocalData({ ...localData, workHistory: copy });
              }}
            />
            <FormInput
              label="Position"
              value={item.position}
              onChange={(e) => {
                const copy = [...localData.workHistory];
                copy[index].position = e.target.value;
                setLocalData({ ...localData, workHistory: copy });
              }}
            />
            <FormInput
              label="Duration"
              value={item.duration}
              onChange={(e) => {
                const copy = [...localData.workHistory];
                copy[index].duration = e.target.value;
                setLocalData({ ...localData, workHistory: copy });
              }}
            />
            <FormTextarea
              label="Description"
              value={item.description}
              onChange={(e) => {
                const copy = [...localData.workHistory];
                copy[index].description = e.target.value;
                setLocalData({ ...localData, workHistory: copy });
              }}
            />
          </div>
        ))}
        <button type="button" onClick={addWork} className="text-emerald-600 hover:underline text-sm">
          + Add More Work History
        </button>

        {/* Education */}
        <SectionDivider title="Education" />
        {localData.education.map((edu, index) => (
          <div
            key={index}
            className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg space-y-4 border border-zinc-200 dark:border-zinc-700"
          >
            <FormInput
              label="Institution"
              value={edu.institution}
              onChange={(e) => {
                const copy = [...localData.education];
                copy[index].institution = e.target.value;
                setLocalData({ ...localData, education: copy });
              }}
            />
            <FormInput
              label="Degree"
              value={edu.degree}
              onChange={(e) => {
                const copy = [...localData.education];
                copy[index].degree = e.target.value;
                setLocalData({ ...localData, education: copy });
              }}
            />
            <FormInput
              label="Year"
              value={edu.year}
              onChange={(e) => {
                const copy = [...localData.education];
                copy[index].year = e.target.value;
                setLocalData({ ...localData, education: copy });
              }}
            />
          </div>
        ))}
        <button type="button" onClick={addEducation} className="text-emerald-600 hover:underline text-sm">
          + Add More Education
        </button>

        {/* Publications */}
        <SectionDivider title="Publications" />
        {localData.publications.map((pub, index) => (
          <FormInput
            key={index}
            label={`Publication ${index + 1}`}
            value={pub}
            onChange={(e) => updatePublication(index, e.target.value)}
          />
        ))}
        <button type="button" onClick={addPublication} className="text-emerald-600 hover:underline text-sm">
          + Add More Publications
        </button>

        {/* Submit */}
        <div className="pt-6">
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2 rounded-md transition"
          >
            Preview CV
          </button>
        </div>
      </form>
    </div>
  );
}
