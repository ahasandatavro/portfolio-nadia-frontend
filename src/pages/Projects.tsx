import React, { useEffect, useState } from "react";
import ProjectCard from "@/components/Project/ProjectCard";
import Mars from "@/assets/gifs/Mars.gif";
import Ast from "@/assets/gifs/Ast.gif"; // fallback image for API projects
import projects from "@/data/projects";
import ProjectDetailsModal from "@/components/Project/ProjectDetailsModal";
import { Project } from "@/types/project";
import Pagination from "@/components/UI/Pagination";
import { projectApi } from "@/api/project.api";

function Projects() {
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const [page, setPage] = useState(1);
  const perPage = 3;

  const [remoteProjects, setRemoteProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // helper. map API response to frontend Project type
  const mapApiProjectToProject = (p: any): Project => {
    return {
      title: p.title,
      desc: p.desc,
      img: p.img || Ast, // backend image URL or fallback gif
      tags: p.tags || [],
      cta: p.cta || "View project",
      href: p.href || "#",
      projectDetails: p.projectDetails || {},
    };
  };

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await projectApi.getProjects();
        // backend response expected. { success, data: [...] }
        const apiProjects = res.data?.data || res.data || [];
        const mapped = apiProjects.map(mapApiProjectToProject);
        setRemoteProjects(mapped);
      } catch (err: any) {
        const msg =
          err?.response?.data?.message ||
          "Failed to load projects from server";
        setError(msg);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // combine local JSON projects + remote DB projects
  const allProjects: Project[] = [...projects, ...remoteProjects];

  const totalPages = Math.ceil(allProjects.length / perPage) || 1;
  const paginated = allProjects.slice(
    (page - 1) * perPage,
    page * perPage
  );

  const handleOpen = (p: Project) => {
    setActiveProject(p);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveProject(null);
  };

  return (
    <main className="relative z-20 min-h-screen py-16 dark:bg-transparent dark:text-white">
      <section className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="font-extrabold text-3xl sm:text-5xl md:text-4xl">
          <span className="block leading-[40px] sm:leading-[40px]">
            HERE'S A GLIMPSE OF
          </span>
          <span className="block leading-[40px] sm:leading-[55px]">
            SOME EXCITING
            <span className="inline-flex items-center gap-2 align-middle">
              <img
                src={Mars}
                className="h-10 inline-block pl-2"
                alt="mars"
              />
              PROJECTS
            </span>
          </span>
          <span className="block leading-[40px] sm:leading-[55px]">
            I'VE DONE
          </span>
        </h2>

        {error && (
          <p className="mt-4 text-sm text-red-400">
            {error}
          </p>
        )}

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading && allProjects.length === 0 && (
            <p className="text-sm text-slate-400">
              Loading projects...
            </p>
          )}

          {!loading &&
            paginated.map((p, i) => (
              <ProjectCard key={i} p={p} onOpen={handleOpen} />
            ))}
        </div>

        {allProjects.length > 0 && (
          <Pagination
            total={totalPages}
            current={page}
            onChange={setPage}
          />
        )}
      </section>

      {activeProject && (
        <ProjectDetailsModal
          open={open}
          onClose={handleClose}
          project={activeProject}
        />
      )}
    </main>
  );
}

export default Projects;
