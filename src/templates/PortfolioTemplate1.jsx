export default function PortfolioTemplate1({ data }) {
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
        <h1 style={{ fontSize: "1.875rem", fontWeight: "bold", marginBottom: "0.25rem" }}>
          {data.fullName}
        </h1>
        <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>{data.bio}</p>
      </div>

      {/* Skills */}
      {data.skills?.length > 0 && (
        <div style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#047857" }}>Skills</h2>
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

      {/* Projects */}
      {data.projects?.length > 0 && (
        <div style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#047857" }}>Projects</h2>
          <div style={{ marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {data.projects.map((proj, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                  padding: "1rem",
                }}
              >
                <h3 style={{ fontSize: "1rem", fontWeight: "500" }}>{proj.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>{proj.description}</p>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#b45309", fontSize: "0.875rem", textDecoration: "underline" }}
                  >
                    {proj.link}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Social Links */}
      {(data.socialLinks?.github || data.socialLinks?.linkedin || data.socialLinks?.website) && (
        <div>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#047857" }}>Social Links</h2>
          <ul style={{ fontSize: "0.875rem", marginTop: "0.5rem", lineHeight: "1.6" }}>
            {data.socialLinks.github && (
              <li>
                <strong>GitHub:</strong>{" "}
                <a
                  href={data.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#b45309", textDecoration: "underline" }}
                >
                  {data.socialLinks.github}
                </a>
              </li>
            )}
            {data.socialLinks.linkedin && (
              <li>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href={data.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#b45309", textDecoration: "underline" }}
                >
                  {data.socialLinks.linkedin}
                </a>
              </li>
            )}
            {data.socialLinks.website && (
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href={data.socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#b45309", textDecoration: "underline" }}
                >
                  {data.socialLinks.website}
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
