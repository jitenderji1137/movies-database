import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')


export const Get_Movies = async(start,end)=>{
    const Data = await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).range(start,end);
    if(Data.data){
        const Result = {
            "Owner":"jitenderji1137",
            "Github":"https://github.com/jitenderji1137",
            "Linkedin":"https://www.linkedin.com/in/jitender1137/",
            "Instagram":"https://www.instagram.com/vijayji1137/",
            "Page":start,
            "Limit":end,
            "Data":Data.data
        }
        return Result;
    }else{
        return "Something went wrong! Please try again";
    }

}