import React, { useEffect, useState, useRef } from "react";
import { X, Download, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Certifications() {
  const [certsByProvider, setCertsByProvider] = useState({});
  const [expandedProvider, setExpandedProvider] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const containerRef = useRef(null);
  const modalRef = useRef(null);

  // Fetch certifications JSON
  useEffect(() => {
    fetch("/certifications/certifications.json")
      .then((res) => res.json())
      .then((data) => setCertsByProvider(data))
      .catch((err) => console.error("Failed to load certifications:", err));
  }, []);

  // Close modal on ESC
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && setSelectedCert(null);
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Collapse provider list when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target) &&
        !modalRef.current?.contains(e.target)
      ) {
        setTimeout(() => setExpandedProvider(null), 100);
      }
    };

    if (expandedProvider) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [expandedProvider]);

  const providerIcons = {
    Oracle: "/certifications/badges/oracle.png",
    "Google Cloud": "/certifications/badges/googleCloud.png",
    AWS: "/certifications/badges/aws.png",
  };

  const toggleExpand = (provider) => {
    if (expandedProvider === provider) {
      // Clicking same provider again closes it
      setExpandedProvider(null);
    } else {
      // Immediately switch to the new provider
      setExpandedProvider(provider);
    }
  };

  return (
    // removed extra container for perfect alignment with Education/Skills
    <section id="certifications" className="scroll-mt-24 pt-8 pb-16">
      <h2 className="text-3xl font-bold mb-8">Certifications</h2>

      {/* Provider Buttons */}
      <div className="flex flex-wrap justify-start gap-6 mb-8">
        {Object.keys(certsByProvider).map((provider) => (
          <button
            key={provider}
            onClick={() => toggleExpand(provider)}
            className={`flex items-center gap-3 px-6 py-3 rounded-xl shadow-md transition transform hover:-translate-y-1 ${
              expandedProvider === provider
                ? "bg-indigo-600 text-white"
                : "bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
            }`}
          >
            <img
              src={providerIcons[provider]}
              alt={provider}
              className={`w-8 h-8 object-contain ${
                provider === "Google Cloud"
                  ? "rounded-full"
                  : provider === "AWS"
                  ? "rounded-lg"
                  : "rounded-md"
              }`}
            />
            <span className="font-semibold">{provider}</span>
          </button>
        ))}
      </div>

      {/* Expanded Provider Certifications */}
      <div ref={containerRef} className="w-full">
        <AnimatePresence mode="popLayout">
          {Object.entries(certsByProvider).map(([provider, certs]) =>
            expandedProvider === provider ? (
              <motion.div
                key={provider}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {certs.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow hover:shadow-xl transition relative"
                  >
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="absolute top-3 right-3 text-gray-500 hover:text-indigo-600"
                    >
                      <Info size={18} />
                    </button>

                    {/* Badge */}
                    {cert.badge && (
                      <div className="flex justify-center mb-4">
                        <div
                          className={`p-2 ${
                            provider === "AWS"
                              ? "bg-slate-100 dark:bg-slate-700 rounded-xl"
                              : ""
                          }`}
                        >
                          <img
                            src={`/certifications/badges/${cert.badge}`}
                            alt={cert.title}
                            className={`max-h-28 object-contain mx-auto ${
                              provider === "Google Cloud"
                                ? "rounded-full"
                                : "rounded-md"
                            }`}
                          />
                        </div>
                      </div>
                    )}

                    <h4 className="text-lg font-semibold mb-1">
                      {cert.title}
                    </h4>
                    {cert.issued && (
                      <p className="text-sm text-gray-500 mb-3">
                        {cert.issued}
                      </p>
                    )}

                    <div className="flex gap-4 justify-center">
                      {cert.file && (
                        <a
                          href={`/certifications/${cert.file}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:underline"
                        >
                          View
                        </a>
                      )}
                      {cert.file && (
                        <a
                          href={`/certifications/${cert.file}`}
                          download
                          className="text-gray-500 hover:text-indigo-600 flex items-center gap-1"
                        >
                          <Download size={14} /> Download
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) =>
              e.target === e.currentTarget && setSelectedCert(null)
            }
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl max-w-md w-full relative"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              >
                <X size={20} />
              </button>

              {selectedCert.badge && (
                <img
                  src={`/certifications/badges/${selectedCert.badge}`}
                  alt={selectedCert.title}
                  className="w-28 h-28 object-contain mx-auto mb-4"
                />
              )}

              <h3 className="text-xl font-bold text-center mb-3">
                {selectedCert.title}
              </h3>
              <div className="text-sm text-gray-600 dark:text-gray-300 text-center space-y-2">
                {selectedCert.issuer && (
                  <p>
                    <strong>Issuer:</strong> {selectedCert.issuer}
                  </p>
                )}
                {selectedCert.issued && (
                  <p>
                    <strong>Issued:</strong> {selectedCert.issued}
                  </p>
                )}
                {selectedCert.description && <p>{selectedCert.description}</p>}
              </div>
              <div className="flex justify-center gap-4 mt-6">
                {selectedCert.file && (
                  <a
                    href={`/certifications/${selectedCert.file}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-indigo-600 text-white px-5 py-2 rounded-lg"
                  >
                    View
                  </a>
                )}
                {selectedCert.file && (
                  <a
                    href={`/certifications/${selectedCert.file}`}
                    download
                    className="border border-indigo-600 text-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition"
                  >
                    Download
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
