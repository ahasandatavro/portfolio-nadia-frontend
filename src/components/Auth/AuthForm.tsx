import { useState } from "react";
import { authApi } from "../../api/auth.api";

interface Props {
  onSuccess: (token: string) => void;
}

const AuthForm = ({ onSuccess }: Props) => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (mode === "signup") {
        await authApi.register({ name, email, password });
        const loginRes = await authApi.login({ email, password });
        onSuccess(loginRes.data.token);
      } else {
        const res = await authApi.login({ email, password });
        onSuccess(res.data.token);
      }
    } catch (err: any) {
      const msg =
        err?.response?.data?.message ||
        "Authentication failed. Please check your input.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">
        {mode === "login" ? "Admin login" : "Admin signup"}
      </h2>
      <p className="text-sm text-slate-400 mb-6">
        Use your admin credentials to access the project uploader
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === "signup" && (
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="At least 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && (
          <p className="text-sm text-red-400 bg-red-950/40 border border-red-800 rounded-md px-3 py-2">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-600 text-sm font-medium text-white px-4 py-2.5 disabled:opacity-60 disabled:cursor-not-allowed transition"
        >
          {loading
            ? "Please wait..."
            : mode === "login"
            ? "Login"
            : "Create admin account"}
        </button>
      </form>

      <button
        type="button"
        className="mt-4 text-xs text-slate-400 hover:text-slate-200 underline underline-offset-4"
        onClick={() =>
          setMode(mode === "login" ? "signup" : "login")
        }
      >
        {mode === "login"
          ? "No admin account yet? Signup"
          : "Already created admin? Login here"}
      </button>
    </div>
  );
};

export default AuthForm;
