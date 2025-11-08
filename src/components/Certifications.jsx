import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Download } from "lucide-react";

export default function Certifications() {
  const [certsByProvider, setCertsByProvider] = useState({});
  const [expandedProvider, setExpandedProvider] = useState(null);
  const [profile, setProfile] = useState(null);

  // Fetch profile and certifications
  useEffect(() => {
    // Fetch GitHub profile info
    fetch("https://api.github.com/users/Neehal-Gupta")
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(() => console.error("Failed to fetch GitHub profile"));

    // Fetch certifications JSON
    fetch("/certifications/certifications.json")
      .then(res => res.json())
      .then(data => setCertsByProvider(data))
      .catch(err => console.error("Failed to load certifications:", err));
  }, []);

  // Provider logos (optional — you can add more later)
  const providerLogos = {
    Oracle: "/certifications/oracle.png",
    "Google Cloud": "/certifications/gcp.png",
    AWS: "/certifications/aws.png"
  };

  // Toggle expand/collapse per provider
  const toggleExpand = (provider) => {
    setExpandedProvider(expandedProvider === provider ? null : provider);
  };

  return (
    <section className="p-8 text-center">
      {/* GitHub Profile Section */}
      {profile && (
        <div className="flex flex-col items-center mb-10">
          <img
            src={profile.avatar_url}
            alt={profile.login}
            className="w-28 h-28 rounded-full shadow-lg mb-3"
          />
          <h2 className="text-2xl font-bold">{profile.name || profile.login}</h2>
          {profile.bio && <p className="text-gray-500">{profile.bio}</p>}
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-2"
          >
            View GitHub Profile
          </a>
        </div>
      )}

      {/* Certifications Header */}
      <h2 className="text-3xl font-bold mb-6">Certifications</h2>

      {/* Provider Sections */}
      {Object.entries(certsByProvider).map(([provider, certs]) => (
        <div key={provider} className="mb-8 border-b border-gray-200 pb-6">
          {/* Provider Header */}
          <div
            className="flex justify-center items-center gap-3 cursor-pointer select-none"
            onClick={() => toggleExpand(provider)}
          >
            {providerLogos[provider] && (
              <img
                src={providerLogos[provider]}
                alt={provider}
                className="w-10 h-10 rounded"
              />
            )}
            <h3 className="text-2xl font-semibold text-blue-600">{provider}</h3>
            {expandedProvider === provider ? (
              <ChevronUp className="ml-2" />
            ) : (
              <ChevronDown className="ml-2" />
            )}
          </div>

          {/* Expanded Certifications Grid */}
          {expandedProvider === provider && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {certs.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col items-center text-center"
                >
                  {/* Badge with hover animation */}
                  {cert.badge && (
                    <div className="relative group mb-3">
                      <img
                        src={`/certifications/${cert.badge}`}
                        alt={cert.title}
                        className="w-24 h-24 object-contain rounded transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  )}

                  {/* Certification Info */}
                  <h4 className="text-lg font-semibold mb-1">{cert.title}</h4>
                  <p className="text-sm text-gray-500 mb-3">{cert.date}</p>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {cert.certificate_file && (
                      <>
                        <a
                          href={`/certifications/${cert.certificate_file}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          View Certificate
                        </a>
                        <a
                          href={`/certifications/${cert.certificate_file}`}
                          download
                          className="text-gray-500 hover:text-blue-600 flex items-center gap-1"
                        >
                          <Download size={16} /> Download
                        </a>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
