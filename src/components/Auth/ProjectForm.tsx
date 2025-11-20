import { useState } from "react";
import { projectApi } from "../../api/project.api";

const ProjectForm = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState("");

  const [href, setHref] = useState("");
  const [overview, setOverview] = useState("");
  const [keyFeatures, setKeyFeatures] = useState("");
  const [integrations, setIntegrations] = useState("");
  const [technicalStack, setTechnicalStack] = useState("");
  const [deployment, setDeployment] = useState("");
  const [img, setImg] = useState<File | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!title.trim()) {newErrors.title = "Title is required";}
    if (!desc.trim()) {newErrors.desc = "Short description is required";}
    // eslint-disable-next-line curly
    if (!tags.trim()) newErrors.tags = "At least one tag is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goToStep2 = () => {
    if (validateStep1()) {
      setStep(2);
      setMessage("");
    }
  };

  const goToStep3 = () => {
    setStep(3);
    setMessage("");
  };

  const goBack = (targetStep: 1 | 2) => {
    setStep(targetStep);
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step !== 3) return;

    setMessage("");
    setErrors({});
    setLoading(true);

    try {
      const payload = {
        title,
        desc,
        tags: tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        cta: "View project",
        href,
        projectDetails: {
          overview,
          keyFeatures: keyFeatures
            .split("\n")
            .map((l) => l.trim())
            .filter(Boolean),
          integrations: integrations
            .split(",")
            .map((i) => i.trim())
            .filter(Boolean),
          technicalStack: technicalStack
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean),
          deployment,
        },
        img,
      };

      await projectApi.createProject(payload);

      setMessage("Project created successfully");
      setTitle("");
      setDesc("");
      setTags("");
      setHref("");
      setOverview("");
      setKeyFeatures("");
      setIntegrations("");
      setTechnicalStack("");
      setDeployment("");
      setImg(null);
      setStep(1);
    } catch (err: any) {
      const msg =
        err?.response?.data?.message || "Project create failed";
      setMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl">
      <h2 className="text-xl font-semibold mb-2">
        Create portfolio project
      </h2>
      <p className="text-sm text-slate-400 mb-4">
        Start with the required basics, then add more details step by step
      </p>

      {/* step indicator */}
      <div className="flex items-center gap-3 mb-6">
        {/* step 1 */}
        <div className="flex items-center gap-2">
          <div
            className={`h-7 w-7 flex items-center justify-center rounded-full text-xs font-semibold ${
              step === 1
                ? "bg-indigo-500 text-white"
                : "bg-emerald-500 text-white"
            }`}
          >
            1
          </div>
          <span className="text-xs text-slate-200">
            Basic info <span className="text-red-400">*</span>
          </span>
        </div>
        <div className="h-px flex-1 bg-slate-700" />

        {/* step 2 */}
        <div className="flex items-center gap-2">
          <div
            className={`h-7 w-7 flex items-center justify-center rounded-full text-xs font-semibold ${
              step === 2
                ? "bg-indigo-500 text-white"
                : step > 2
                ? "bg-emerald-500 text-white"
                : "bg-slate-700 text-slate-300"
            }`}
          >
            2
          </div>
          <span className="text-xs text-slate-200">
            Project details
          </span>
        </div>
        <div className="h-px flex-1 bg-slate-700" />

        {/* step 3 */}
        <div className="flex items-center gap-2">
          <div
            className={`h-7 w-7 flex items-center justify-center rounded-full text-xs font-semibold ${
              step === 3
                ? "bg-indigo-500 text-white"
                : "bg-slate-700 text-slate-300"
            }`}
          >
            3
          </div>
          <span className="text-xs text-slate-200">
            Links & media
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* STEP 1 . required fields */}
        {step === 1 && (
          <>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Project title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {errors.title && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.title}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Short description{" "}
                <span className="text-red-400">*</span>
              </label>
              <textarea
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[80px]"
                placeholder="What did you build, fix, or improve in this project?"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
              {errors.desc && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.desc}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Tags <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Next.js, Node.js, MongoDB"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Comma separated technologies
              </p>
              {errors.tags && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.tags}
                </p>
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={goToStep2}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-600 text-sm font-medium text-white px-4 py-2.5 transition"
              >
                Next. project details
              </button>
            </div>
          </>
        )}

        {/* STEP 2 . project details */}
        {step === 2 && (
          <>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Overview
              </label>
              <textarea
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[80px]"
                placeholder="High-level summary of what this project does"
                value={overview}
                onChange={(e) => setOverview(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Key features
              </label>
              <textarea
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[90px]"
                placeholder={`One feature per line\nExample:\nFixed Next.js SSR issue\nImproved build pipeline`}
                value={keyFeatures}
                onChange={(e) => setKeyFeatures(e.target.value)}
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Each line will be stored as a separate feature
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Integrations
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Stripe, Cloudinary"
                  value={integrations}
                  onChange={(e) => setIntegrations(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Technical stack
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="React, TypeScript, Node"
                  value={technicalStack}
                  onChange={(e) => setTechnicalStack(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Deployment notes
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Vercel, Render, custom VPS, etc."
                  value={deployment}
                  onChange={(e) => setDeployment(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 gap-2">
              <button
                type="button"
                onClick={() => goBack(1)}
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 text-sm font-medium text-slate-200 px-4 py-2.5 hover:bg-slate-900 transition"
              >
                Back
              </button>
              <button
                type="button"
                onClick={goToStep3}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-600 text-sm font-medium text-white px-4 py-2.5 transition"
              >
                Next. links & media
              </button>
            </div>
          </>
        )}

        {/* STEP 3 . links + image + submit */}
        {step === 3 && (
          <>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Live URL
              </label>
              <input
                type="text"
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="https://example.com"
                value={href}
                onChange={(e) => setHref(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">
                Thumbnail image
              </label>
              <label className="flex items-center gap-3 border border-dashed border-slate-700 rounded-lg px-3 py-3 cursor-pointer hover:border-indigo-500 hover:bg-slate-900/60 transition">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setImg(e.target.files?.[0] || null)}
                />
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-slate-200">
                    {img ? img.name : "Click to upload image"}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    PNG, JPG, or WEBP, up to 5 MB
                  </span>
                </div>
              </label>
            </div>

            {message && (
              <p className="text-sm mt-2 text-emerald-400">
                {message}
              </p>
            )}

            <div className="flex items-center justify-between pt-2 gap-2">
              <button
                type="button"
                onClick={() => goBack(2)}
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 text-sm font-medium text-slate-200 px-4 py-2.5 hover:bg-slate-900 transition"
              >
                Back
              </button>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-600 text-sm font-medium text-white px-4 py-2.5 disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                {loading ? "Saving..." : "Save project"}
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ProjectForm;
