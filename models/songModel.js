import { supabase } from "../config/configSupabase.js";

export class SongModel {
  static async getAllRecords() {
    try {
      // Kald til database
      let { data, error } = await supabase
        .from("songs")
        .select("id, title, content, created_at");
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kan ikke hente sangliste, ${error}`);
    }
  }
}

export class ArtistModel {
  static async getAllRecords() {
    try {
      // Kald til database
      let { data, error } = await supabase.from("artists").select("id, name");
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kan ikke hente artistliste, ${error}`);
    }
  }
}

export class AlbumModel {
  static async getAllRecords() {
    try {
      // Kald til database
      let { data, error } = await supabase
        .from("albums")
        .select("id, title, artist_id:artists(name), release_date");
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kan ikke hente albumliste, ${error}`);
    }
  }
}
