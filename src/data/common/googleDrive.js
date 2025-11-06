export const googleDriveConfig = {
  projectId: "YOUR_PROJECT_ID",
  apiKey: "YOUR_API_KEY",
  clientId: "YOUR_CLIENT_ID",
};

export const driveResources = {
  portfolioFolder: {
    name: "Portfolio Projects",
    id: "DRIVE_FOLDER_ID",
    description: "Folder containing all projects and files",
  },

  projects: {
    purchaseManagement: {
      name: "Purchase Management System",
      folder: "DRIVE_FOLDER_1",
      files: {
        presentation: "DRIVE_FILE_ID_PDF_1",
        screenshots: "DRIVE_FOLDER_SCREENSHOTS_1",
        documentation: "DRIVE_FILE_ID_DOC_1",
        demoVideo: "DRIVE_FILE_ID_VIDEO_1",
      },
    },
    ecommerce: {
      name: "E-Commerce Backend",
      folder: "DRIVE_FOLDER_2",
      files: {
        presentation: "DRIVE_FILE_ID_PDF_2",
        apiDocumentation: "DRIVE_FILE_ID_SWAGGER_2",
        database: "DRIVE_FILE_ID_DB_2",
      },
    },
    teamManagement: {
      name: "Team Management App",
      folder: "DRIVE_FOLDER_3",
      files: {
        presentation: "DRIVE_FILE_ID_PDF_3",
        screenshots: "DRIVE_FOLDER_SCREENSHOTS_3",
        features: "DRIVE_FILE_ID_DOC_3",
      },
    },
  },
};

export const openGoogleDriveFile = (fileId, fileName = "file") => {
  const driveUrl = `https://drive.google.com/file/d/${fileId}/view`;
  window.open(driveUrl, "_blank");
};

export const openGoogleDriveFolder = (folderId, folderName = "folder") => {
  const driveFolderUrl = `https://drive.google.com/drive/folders/${folderId}`;
  window.open(driveFolderUrl, "_blank");
};

export const getGoogleDriveImageUrl = (fileId) => {
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
};

/*
 * Setup Instructions:
 * 1. Create a project in Google Cloud Console
 * 2. Enable Google Drive API
 * 3. Create OAuth 2.0 Client ID
 * 4. Add file and folder IDs here
 *
 * To share files publicly:
 * - Make the file shareable with "Anyone"
 * - Copy the file ID from the URL
 * - Use it in driveResources above
 */
