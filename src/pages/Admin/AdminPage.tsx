import { useEffect, useState } from "react";
import blackHole from "../../assets/videos/blackhole.webm";
import StarsCanvas from "@/components/StarBackground";
import ProjectForm from "@/components/Auth/ProjectForm";
import AuthForm from "@/components/Auth/AuthForm";
const AdminPage = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {setToken(savedToken);}
  }, []);

  const handleAuthSuccess = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
        {/* Video Background */}
            <div className="rotate-180 min-h-screen absolute left-0 w-full z-10">
                {/* Video */}
                <video autoPlay muted loop className="w-full relative object-cover ">
                    <source src={blackHole} type="video/webm" />
                    <source src="fallback.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Black Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-85 " />
            </div>
            <StarsCanvas />
      <div className="w-full max-w-3xl z-20">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Admin Panel
            </h1>
            <p className="text-sm text-slate-400">
              Login or signup, then upload your portfolio projects
            </p>
          </div>

          {token && (
            // eslint-disable-next-line react/button-has-type
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm rounded-md border border-slate-700 text-slate-200 hover:bg-slate-800 transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* Card */}
        <div className="bg-slate-900/70 border border-slate-800 shadow-xl rounded-2xl p-6 md:p-8 backdrop-blur">
          {!token ? (
            <AuthForm onSuccess={handleAuthSuccess} />
          ) : (
            <ProjectForm />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
