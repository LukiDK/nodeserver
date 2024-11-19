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

  static async getRecordById(id) {
    let { data, error } = await supabase
      .from("songs")
      .select("title")
      .eq("id", id)
      .single();

    if (error) {
      throw new Error(error.message);
    } else {
      return data;
    }
  }

  static async createRecord(formdata) {
    try {
      let { data, error } = await supabase
        .from("songs")
        .insert([
          {
            title: formdata.title,
            content: formdata.content,
            lyrics: formdata.lyrics,
            artist_id: formdata.artist_id,
          },
        ])
        .select();
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kan ikke oprette sang, ${error}`);
    }
  }

  static async updateRecord(formdata) {
    try {
      let { data, error } = await supabase
        .from("songs")
        .update([
          {
            title: formdata.title,
            content: formdata.content,
            lyrics: formdata.lyrics,
            artist_id: formdata.artist_id,
          },
        ])
        .eq("id", formdata.id)
        .select();
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kunne ikke opdatere sang ${error}`);
    }
  }
}