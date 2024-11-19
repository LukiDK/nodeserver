import { supabase } from "../config/configSupabase.js";

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

  static async getRecordById(id) {
    let { data, error } = await supabase
      .from("albums")
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
        .from("albums")
        .insert([
          {
            artist_id: formdata.artist_id,
            title: formdata.title,
            description: formdata.description,
            image: formdata.image,
            release_date: formdata.release_date,
          },
        ])
        .select();
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kan ikke oprette album, ${error}`);
    }
  }

  static async updateRecord(formdata) {
    try {
      let { data, error } = await supabase
        .from("albums")
        .update([
          {
            artist_id: formdata.artist_id,
            title: formdata.title,
            description: formdata.description,
            image: formdata.image,
            release_date: formdata.release_date,
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
      console.error(`Fejl: kunne ikke opdatere albums, ${error}`);
    }
  }

  static async deleteRecord(id) {
    try {
      let { data, error } = await supabase.from("albums").delete().eq("id", id);
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kunne ikke slette album, ${error}`);
    }
  }
}
