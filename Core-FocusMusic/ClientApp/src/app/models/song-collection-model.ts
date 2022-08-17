import { EnumCategory } from "./enum-category";
import { EnumGenre } from "./enum-genre";
import { SongModel } from "./song-model";

export class SongCollectionModel {
  public id: number;
  public genre: EnumGenre;
  public category: EnumCategory;
  public name: string;
  public songs: SongModel[];
  
}
