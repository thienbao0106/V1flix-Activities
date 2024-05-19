import { Images } from "../types/Images";

export const getImage = (type: string, images: Images[]): string => {
  const result = images.find((image) => image.type === type);
  if (!result) return "";
  const discordImg = import.meta.env.VITE_DISCORD_IMAGE_URL;
  return `${discordImg}/${result.source.split("/upload")[1]}`;
};
