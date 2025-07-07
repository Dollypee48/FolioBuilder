import { useFormContext } from "../context/FormContext";
import FormInput from "../components/FormInput";
import FormTextarea from "../components/FormTextarea";
import SectionDivider from "../components/SectionDivider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ResumeForm() {
  const { resumeData, setResumeData } = useFormContext();
  const navigate = useNavigate();

  const [localData, setLocalData] = useState({
    fullName: "",
    email: "",
    phone: "",
    summary: "",
    skills: [""],
    experience: [{ company: "", role: "", duration: "", description: "" }],
    education: [{ school: "", degree: "", year: "" }],
  });

  const handleChange = (e) => {
    setLocalData({ ...localData, [e.target.name]: e.target.value });
  };

  const updateSkill = (index, value) => {
    const updatedSkills = [...localData.skills];
    updatedSkills[index] = value;
    setLocalData({ ...localData, skills: updatedSkills });
  };

  const addSkill = () => {
    setLocalData((prev) => ({ ...prev, skills: [...prev.skills, ""] }));
  };

  const addExperience = () => {
    setLocalData((prev) => ({
      ...prev,
      experience: [...prev.experience, { company: "", role: "", duration: "", description: "" }],
    }));
  };

  const addEducation = () => {
    setLocalData((prev) => ({
      ...prev,
      education: [...prev.education, { school: "", degree: "", year: "" }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResumeData(localData);
    navigate("/preview/resume");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-white dark:bg-zinc-900 rounded-xl shadow-md mt-10 mb-10">
      <h1 className="text-3xl font-bold text-zinc-800 dark:text-white mb-6">Build Your Resume</h1>

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Personal Info */}
        <SectionDivider title="Personal Information" />
        <FormInput label="Full Name" name="fullName" value={localData.fullName} onChange={handleChange} />
        <FormInput label="Email" name="email" type="email" value={localData.email} onChange={handleChange} />
        <FormInput label="Phone" name="phone" type="tel" value={localData.phone} onChange={handleChange} />
        <FormTextarea label="Professional Summary" name="summary" value={localData.summary} onChange={handleChange} />

        {/* Skills */}
        <SectionDivider title="Skills" />
        {localData.skills.map((skill, index) => (
          <FormInput
            key={index}
            label={`Skill ${index + 1}`}
            value={skill}
            onChange={(e) => updateSkill(index, e.target.value)}
          />
        ))}
        <button type="button" onClick={addSkill} className="text-emerald-600 hover:underline text-sm">
          + Add Skill
        </button>

        {/* Experience */}
        <SectionDivider title="Work Experience" />
        {localData.experience.map((item, index) => (
          <div key={index} className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg space-y-4 border dark:border-zinc-700">
            <FormInput
              label="Company"
              value={item.company}
              onChange={(e) => {
                const updated = [...localData.experience];
                updated[index].company = e.target.value;
                setLocalData({ ...localData, experience: updated });
              }}
            />
            <FormInput
              label="Role"
              value={item.role}
              onChange={(e) => {
                const updated = [...localData.experience];
                updated[index].role = e.target.value;
                setLocalData({ ...localData, experience: updated });
              }}
            />
            <FormInput
              label="Duration"
              value={item.duration}
              onChange={(e) => {
                const updated = [...localData.experience];
                updated[index].duration = e.target.value;
                setLocalData({ ...localData, experience: updated });
              }}
            />
            <FormTextarea
              label="Description"
              value={item.description}
              onChange={(e) => {
                const updated = [...localData.experience];
                updated[index].description = e.target.value;
                setLocalData({ ...localData, experience: updated });
              }}
            />
          </div>
        ))}
        <button type="button" onClick={addExperience} className="text-emerald-600 hover:underline text-sm">
          + Add Experience
        </button>

        {/* Education */}
        <SectionDivider title="Education" />
        {localData.education.map((item, index) => (
          <div key={index} className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg space-y-4 border dark:border-zinc-700">
            <FormInput
              label="School"
              value={item.school}
              onChange={(e) => {
                const updated = [...localData.education];
                updated[index].school = e.target.value;
                setLocalData({ ...localData, education: updated });
              }}
            />
            <FormInput
              label="Degree"
              value={item.degree}
              onChange={(e) => {
                const updated = [...localData.education];
                updated[index].degree = e.target.value;
                setLocalData({ ...localData, education: updated });
              }}
            />
            <FormInput
              label="Year"
              value={item.year}
              onChange={(e) => {
                const updated = [...localData.education];
                updated[index].year = e.target.value;
                setLocalData({ ...localData, education: updated });
              }}
            />
          </div>
        ))}
        <button type="button" onClick={addEducation} className="text-emerald-600 hover:underline text-sm">
          + Add Education
        </button>

        {/* Submit */}
        <div className="pt-6">
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2 rounded-md transition"
          >
            Preview Resume
          </button>
        </div>
      </form>
    </div>
  );
}
