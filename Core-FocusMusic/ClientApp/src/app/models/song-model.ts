import { EnumCategory } from "./enum-category";
import { EnumGenre } from "./enum-genre";

export class SongModel {
  public id: number;
  public title: string;
  public artist: string;
  public franchise: string;
  public videoId: string;
  public genre: EnumGenre;
  public category: EnumCategory;
  public thumbnailImgUrl:string;
  public backgroundImgUrl: string;
}
