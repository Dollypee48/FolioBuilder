import { useFormContext } from "../context/FormContext";
import FormInput from "../components/FormInput";
import FormTextarea from "../components/FormTextarea";
import SectionDivider from "../components/SectionDivider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PortfolioForm() {
  const { portfolioData, setPortfolioData } = useFormContext();
  const navigate = useNavigate();

  const [localData, setLocalData] = useState({
    fullName: "",
    bio: "",
    skills: [""],
    projects: [{ title: "", description: "", link: "" }],
    socialLinks: { github: "", linkedin: "", website: "" },
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

  const addProject = () => {
    setLocalData((prev) => ({
      ...prev,
      projects: [...prev.projects, { title: "", description: "", link: "" }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPortfolioData(localData);
    navigate("/preview/portfolio");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-white dark:bg-zinc-900 rounded-xl shadow-md mt-10 mb-10">
      <h1 className="text-3xl font-bold text-zinc-800 dark:text-white mb-6">Create Your Portfolio</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Info */}
        <SectionDivider title="Basic Information" />
        <FormInput label="Full Name" name="fullName" value={localData.fullName} onChange={handleChange} />
        <FormTextarea label="Short Bio" name="bio" value={localData.bio} onChange={handleChange} />

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

        {/* Projects */}
        <SectionDivider title="Projects" />
        {localData.projects.map((proj, index) => (
          <div
            key={index}
            className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg space-y-4 border border-zinc-200 dark:border-zinc-700"
          >
            <FormInput
              label="Project Title"
              value={proj.title}
              onChange={(e) => {
                const updated = [...localData.projects];
                updated[index].title = e.target.value;
                setLocalData({ ...localData, projects: updated });
              }}
            />
            <FormTextarea
              label="Description"
              value={proj.description}
              onChange={(e) => {
                const updated = [...localData.projects];
                updated[index].description = e.target.value;
                setLocalData({ ...localData, projects: updated });
              }}
            />
            <FormInput
              label="Project Link"
              value={proj.link}
              onChange={(e) => {
                const updated = [...localData.projects];
                updated[index].link = e.target.value;
                setLocalData({ ...localData, projects: updated });
              }}
            />
          </div>
        ))}
        <button type="button" onClick={addProject} className="text-emerald-600 hover:underline text-sm">
          + Add Project
        </button>

        {/* Social Links */}
        <SectionDivider title="Social Links" />
        <FormInput
          label="GitHub"
          name="github"
          value={localData.socialLinks.github}
          onChange={(e) =>
            setLocalData((prev) => ({
              ...prev,
              socialLinks: { ...prev.socialLinks, github: e.target.value },
            }))
          }
        />
        <FormInput
          label="LinkedIn"
          name="linkedin"
          value={localData.socialLinks.linkedin}
          onChange={(e) =>
            setLocalData((prev) => ({
              ...prev,
              socialLinks: { ...prev.socialLinks, linkedin: e.target.value },
            }))
          }
        />
        <FormInput
          label="Personal Website"
          name="website"
          value={localData.socialLinks.website}
          onChange={(e) =>
            setLocalData((prev) => ({
              ...prev,
              socialLinks: { ...prev.socialLinks, website: e.target.value },
            }))
          }
        />

        {/* Submit */}
        <div className="pt-6">
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2 rounded-md transition"
          >
            Preview Portfolio
          </button>
        </div>
      </form>
    </div>
  );
}
