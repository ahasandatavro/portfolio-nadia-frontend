import { Project } from "@/types/project"
export interface ProjectDetailsModalProps {
  open: boolean
  onClose: () => void
  project: Project
}
