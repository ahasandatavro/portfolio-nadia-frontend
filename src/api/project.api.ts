import { http } from "./http";

export interface ProjectPayload {
    title: string;
    desc: string;
    tags: string[];
    cta?: string;
    href?: string;
    projectDetails?: any;
    img?: File | null;
}

export const projectApi = {
    getProjects: () => http.get("/api/projects"),

    createProject: (data: ProjectPayload) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("desc", data.desc);
        formData.append("tags", JSON.stringify(data.tags));
        if (data.cta) { formData.append("cta", data.cta); }
        if (data.href) { formData.append("href", data.href); }
        if (data.projectDetails) {
            formData.append("projectDetails", JSON.stringify(data.projectDetails));
        }
        if (data.img) {
            formData.append("img", data.img);
        }

        return http.post("/api/projects", formData);
    },
};
