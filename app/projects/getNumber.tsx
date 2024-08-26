type Project = {
  label: string;
  imgUrl: string; // or StaticImageData if you’re importing images with `next/image`
  description: string;
  href: string;
};
export const getNumberOfProjects = (projects: Project[]) => {
  return projects.length;
};
