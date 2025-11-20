export type Project = {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  cta: string;
  href: string;
  projectDetails: {
    overview: string;
    keyFeatures: string[];
    integrations: string[];
    technicalStack: string[];
    deployment: string;
  };
};
