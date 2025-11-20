import { http } from "./http";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export const authApi = {
  register: (data: RegisterPayload) =>
    http.post("/api/auth/register", data),

  login: (data: LoginPayload) =>
    http.post("/api/auth/login", data),
};
