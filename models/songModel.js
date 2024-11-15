import { supabase } from "../../config/configSupabase.js";

export class SongModel {
  static async getAllRecords() {
    try {
      // Kald til database
      let { data, error } = await supabase.from("songs").select("id, title");
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
