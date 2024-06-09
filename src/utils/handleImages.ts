import { Images } from "../types/Images";

export const defaultImage = (type: string) => {
  const discordImg = import.meta.env.VITE_DISCORD_IMAGE_URL;
  return `${discordImg}/v1/anime-v2/${type}/default-${type}`;
};

export const getImage = (type: string, images: Images[]): string => {
  const result = images.find((image) => image.type === type);
  if (!result) return defaultImage(type);
  const discordImg = import.meta.env.VITE_DISCORD_IMAGE_URL;
  return `${discordImg}/${result.source.split("/upload")[1]}`;
};

export const getEpisodeThumbnail = (seriesTitle: string, originUrl: string) => {
  const discordImg = import.meta.env.VITE_DISCORD_IMAGE_URL;
  if (originUrl === "" || !originUrl)
    return `${discordImg}/v1/anime-v2/thumbnail/default-thumbnail`;
  const title = seriesTitle.toLowerCase().replace(/ /g, "_");
  const splitedString = originUrl.split("/");
  const fileName: string = splitedString[splitedString.length - 1];
  return `${discordImg}/v1/anime-v2/episodes/${title}/${fileName}`;
};
