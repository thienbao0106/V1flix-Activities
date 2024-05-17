export const getImage = (type: string, images: any[]) => {
  const result = images.find((image) => image.type === type);
  const discordImg = import.meta.env.VITE_DISCORD_IMAGE_URL;
  return `${discordImg}/${result.source.split("/upload")[1]}`;
};
