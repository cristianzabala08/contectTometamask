import { PostgrestResponse, PostgrestSingleResponse } from "@supabase/supabase-js";
import { supabase } from "../utils/supabaseClient";

async function getProfile(walletId: string): Promise<PostgrestSingleResponse<any>> {
    
    let data = await supabase
    .from("userWallet")
    .select(`id, walletId`)
    .eq("walletId", walletId)
    .single();

    return data ;
}

async function getRef(walletId: string): Promise<PostgrestSingleResponse<any>> {
    
    let data = await supabase
    .from("ref")
    .select(`userRefId, walletRefId`)
    .eq("walletRefId", walletId)
    .single();

    return data ;
}

async function insert(name:string, insertData:{}):Promise<PostgrestResponse<any>>  {
  
  let data =  await supabase.from(name).insert(insertData, {
        returning: "minimal", // Don't return the value after inserting
    });

    return data ;
}

export { getProfile as getProfileSevices, insert as insertServices,getRef as getRefServices };