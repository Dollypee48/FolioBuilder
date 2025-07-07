export default function CvTemplate1({ data }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: "#1f2937", // equivalent to zinc-800
        padding: "1.5rem",
        borderRadius: "0.75rem",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header */}
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{data.fullName}</h1>
        <p>{data.email} | {data.phone}</p>
      </div>

      {/* Profile */}
      {data.profile && (
        <div style={{ marginTop: "1.5rem" }}>
          <h2 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#047857" }}>Profile</h2>
          <p style={{ fontSize: "0.875rem" }}>{data.profile}</p>
        </div>
      )}

      {/* Work History */}
      {data.workHistory?.length > 0 && (
        <div style={{ marginTop: "1.5rem" }}>
          <h2 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#047857" }}>Work History</h2>
          {data.workHistory.map((item, index) => (
            <div key={index} style={{ marginBottom: "0.75rem" }}>
              <p style={{ fontWeight: "500" }}>{item.position} at {item.organization}</p>
              <p style={{ fontSize: "0.875rem", fontStyle: "italic" }}>{item.duration}</p>
              <p style={{ fontSize: "0.875rem" }}>{item.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education?.length > 0 && (
        <div style={{ marginTop: "1.5rem" }}>
          <h2 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#047857" }}>Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} style={{ marginBottom: "0.5rem" }}>
              <p style={{ fontWeight: "500" }}>{edu.degree} — {edu.institution}</p>
              <p style={{ fontSize: "0.875rem", fontStyle: "italic" }}>{edu.year}</p>
            </div>
          ))}
        </div>
      )}

      {/* Publications */}
      {data.publications?.length > 0 && (
        <div style={{ marginTop: "1.5rem" }}>
          <h2 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#047857" }}>Publications</h2>
          <ul style={{ fontSize: "0.875rem", paddingLeft: "1.25rem", listStyleType: "disc" }}>
            {data.publications.map((pub, index) => (
              <li key={index}>{pub}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
