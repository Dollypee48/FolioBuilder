export default function ResumeTemplate1({ data }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: "#1f2937", // zinc-800
        padding: "1.5rem",
        borderRadius: "0.75rem",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.25rem" }}>
          {data.fullName}
        </h1>
        <p style={{ fontSize: "0.875rem" }}>
          {data.email} | {data.phone}
        </p>
      </div>

      {/* Summary */}
      {data.summary && (
        <div style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#047857" }}>Summary</h2>
          <p style={{ fontSize: "0.875rem", marginTop: "0.25rem" }}>{data.summary}</p>
        </div>
      )}

      {/* Skills */}
      {data.skills?.length > 0 && (
        <div style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#047857" }}>Skills</h2>
          <ul
            style={{
              fontSize: "0.875rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.5rem 1rem",
              paddingLeft: "1.25rem",
              listStyleType: "disc",
              marginTop: "0.5rem",
            }}
          >
            {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Experience */}
      {data.experience?.length > 0 && (
        <div style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#047857" }}>Experience</h2>
          {data.experience.map((item, index) => (
            <div key={index} style={{ marginBottom: "1rem" }}>
              <p style={{ fontWeight: "500" }}>{item.role} at {item.company}</p>
              <p style={{ fontSize: "0.875rem", fontStyle: "italic" }}>{item.duration}</p>
              <p style={{ fontSize: "0.875rem" }}>{item.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education?.length > 0 && (
        <div>
          <h2 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#047857" }}>Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} style={{ marginBottom: "0.75rem" }}>
              <p style={{ fontWeight: "500" }}>{edu.degree} — {edu.school}</p>
              <p style={{ fontSize: "0.875rem", fontStyle: "italic" }}>{edu.year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
