import { promises as fs } from "fs";

export const readJSONFile = async <T,>(path: string): Promise<T | null> => {
  try {
    const file = await fs.readFile(path, "utf8");
    const data: T = JSON.parse(file);
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
