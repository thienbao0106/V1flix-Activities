export const getSourceFilm = (url: string) => {
  const discordUrl = import.meta.env.VITE_DISCORD_ACTIVITY_URL;
  const ggDriveApi = import.meta.env.VITE_GG_DRIVE_KEY;
  const urlObj = new URL(url);
  const pathname = urlObj.pathname;
  const parts = pathname.split("/");
  return `${discordUrl}/episode/${
    parts[parts.length - 1]
  }?key=${ggDriveApi}&alt=media`;
};
