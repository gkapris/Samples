import { IMission } from "./mission.interface";

export interface IHero {
  id: string;
  name: string;
  alias: string;
  shortBio: string;
  missions: IMission[];
}
