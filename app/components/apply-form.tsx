"use client";

import { useState, useRef, type FormEvent, type DragEvent, type ChangeEvent } from "react";

const positionOptions = [
  "Security Guard",
  "Mobile Patrol Officer",
  "Fire Watch Guard",
  "Event Security Personnel",
  "Loss Prevention Officer",
  "Site Supervisor",
  "Other",
];

export default function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData();
    formData.append("name", (form.elements.namedItem("apply-name") as HTMLInputElement).value);
    formData.append("email", (form.elements.namedItem("apply-email") as HTMLInputElement).value);
    formData.append("phone", (form.elements.namedItem("apply-phone") as HTMLInputElement).value);
    formData.append("city", (form.elements.namedItem("apply-city") as HTMLInputElement).value);
    formData.append("position", (form.elements.namedItem("apply-position") as HTMLSelectElement).value);
    formData.append("license", (form.elements.namedItem("apply-license") as HTMLInputElement).value);
    formData.append("experience", (form.elements.namedItem("apply-experience") as HTMLTextAreaElement).value);
    if (resumeFile) {
      formData.append("resume", resumeFile);
    }

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us at info@caprasecurity.ca.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleDrag(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (isValidFile(file)) setResumeFile(file);
    }
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (isValidFile(file)) setResumeFile(file);
    }
  }

  function isValidFile(file: File) {
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    return allowed.includes(file.type) && file.size <= 10 * 1024 * 1024;
  }

  function removeFile() {
    setResumeFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10">
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white">Application Submitted</h3>
        <p className="mt-2 max-w-sm text-sm text-white/40">
          Thank you for your interest. Our recruitment team will review your application and contact you shortly.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-white/[0.1] bg-white/[0.05] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/25 focus:border-[#8b6914]/50 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(139,105,20,0.1)]";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="apply-name" className="mb-1.5 block text-[13px] font-medium text-white/50">Full Name</label>
          <input id="apply-name" name="apply-name" type="text" required placeholder="Your full name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="apply-email" className="mb-1.5 block text-[13px] font-medium text-white/50">Email</label>
          <input id="apply-email" name="apply-email" type="email" required placeholder="you@email.com" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="apply-phone" className="mb-1.5 block text-[13px] font-medium text-white/50">Phone</label>
          <input id="apply-phone" name="apply-phone" type="tel" required placeholder="(416) 000-0000" className={inputClass} />
        </div>
        <div>
          <label htmlFor="apply-city" className="mb-1.5 block text-[13px] font-medium text-white/50">City / Region</label>
          <input id="apply-city" name="apply-city" type="text" required placeholder="Mississauga, ON" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="apply-position" className="mb-1.5 block text-[13px] font-medium text-white/50">Position Interested In</label>
        <select id="apply-position" name="apply-position" required className={inputClass} defaultValue="">
          <option value="" disabled>Select a position</option>
          {positionOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-[#0f1b2d] text-white">{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="apply-license" className="mb-1.5 block text-[13px] font-medium text-white/50">Security License #</label>
        <input id="apply-license" name="apply-license" type="text" placeholder="Your security license number (if applicable)" className={inputClass} />
      </div>

      {/* Resume Dropbox */}
      <div>
        <label className="mb-1.5 block text-[13px] font-medium text-white/50">Resume</label>
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`relative cursor-pointer rounded-xl border-2 border-dashed px-4 py-8 text-center transition-all ${
            dragActive
              ? "border-[#8b6914] bg-[#8b6914]/10"
              : resumeFile
                ? "border-emerald-500/30 bg-emerald-500/[0.06]"
                : "border-white/[0.1] bg-white/[0.02] hover:border-[#8b6914]/30 hover:bg-white/[0.04]"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />

          {resumeFile ? (
            <div className="flex items-center justify-center gap-3">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div className="text-left">
                <p className="text-sm font-medium text-white">{resumeFile.name}</p>
                <p className="text-[12px] text-white/35">
                  {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); removeFile(); }}
                className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-red-500/10 text-red-400 transition hover:bg-red-500/20 hover:text-red-300"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ) : (
            <>
              <svg viewBox="0 0 24 24" className="mx-auto h-8 w-8 text-white/20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 16V4m0 0l-4 4m4-4l4 4" />
                <path d="M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" />
              </svg>
              <p className="mt-2 text-sm text-white/45">
                <span className="font-semibold text-[#a08030]">Click to upload</span> or drag and drop
              </p>
              <p className="mt-1 text-[12px] text-white/25">
                PDF, DOC, or DOCX (max 10MB)
              </p>
            </>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="apply-experience" className="mb-1.5 block text-[13px] font-medium text-white/50">Experience &amp; Qualifications</label>
        <textarea
          id="apply-experience"
          name="apply-experience"
          rows={4}
          placeholder="Describe your security experience, certifications, availability, etc."
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-xl bg-[#8b6914] px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#a08030] hover:shadow-[0_8px_24px_rgba(139,105,20,0.25)] disabled:opacity-60"
      >
        {submitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
