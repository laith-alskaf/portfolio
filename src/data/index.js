export * from "./common/personal.js";
export * from "./common/skills.js";
export * from "./common/education.js";
export * from "./common/experience.js";
export * from "./common/googleDrive.js";

export * from "./projects/categories.js";
export * from "./projects/projectsData.js";

// Helper function to combine all portfolio data
export const getAllPortfolioData = () => {
  return {
    personalInfo,
    skills,
    education,
    certificates,
    experiences,
    projects,
    projectCategories,
  };
};