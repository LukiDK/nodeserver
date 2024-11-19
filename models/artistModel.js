import { supabase } from "../config/configSupabase.js";

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

  static async getRecordById(id) {
    let { data, error } = await supabase
      .from("artists")
      .select("name")
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
        .from("artists")
        .insert([
          {
            name: formdata.name,
            description: formdata.description,
            image: formdata.image,
          },
        ])
        .select();
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kan ikke oprette artist, ${error}`);
    }
  }
}