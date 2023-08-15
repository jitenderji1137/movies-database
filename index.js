import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://dcfuynjpxxdmsxwfacxq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjZnV5bmpweHhkbXN4d2ZhY3hxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzODQxNTUsImV4cCI6MjAwNjk2MDE1NX0.dhe2e-KtMcEkvEoJPn6SUNw_0vlKtI0NHxyxPfNEnJo')

export const MoviesDatabase = async()=>{
    const Data = await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).range(0,19);
    if(Data.data){
        const Result = {
            "Owner":"jitenderji1137",
            "Github":"https://github.com/jitenderji1137",
            "Linkedin":"https://www.linkedin.com/in/jitender1137/",
            "Instagram":"https://www.instagram.com/vijayji1137/",
            "Page":startinput,
            "Limit":endinput,
            "data":Data.data,
            "Repo":"https://github.com/jitenderji1137/movies-database"
        }
        return Result;
    }else if(Data.data.length === 0){
        return "No! Result fount on this..."
    }
    else{
        return "Something went wrong! Please try again";
    }
}
export const Get_Movies = async(startinput,endinput)=>{
    if(startinput<=0||endinput<=0){
        return "Input's are Invalid..."
    }
    const start = (startinput-1)*(endinput);
    const end = ((startinput)*(endinput)-1);
    const Data = await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).range(start,end);
    if(Data.data){
        const Result = {
            "Owner":"jitenderji1137",
            "Github":"https://github.com/jitenderji1137",
            "Linkedin":"https://www.linkedin.com/in/jitender1137/",
            "Instagram":"https://www.instagram.com/vijayji1137/",
            "Page":startinput,
            "Limit":endinput,
            "data":Data.data,
            "Repo":"https://github.com/jitenderji1137/movies-database"
        }
        return Result;
    }else if(Data.data.length === 0){
        return "No! Result fount on this..."
    }
    else{
        return "Something went wrong! Please try again";
    }
}
export const Search_Movies = async(title,startinput,endinput)=>{
    if(startinput<=0||endinput<=0){
        return "Input's are Invalid..."
    }
    const start = (startinput-1)*(endinput);
    const end = ((startinput)*(endinput)-1);
    const Data = await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).ilike('Title', title).range(start,end);
    if(Data.data){
        const Result = {
            "Owner":"jitenderji1137",
            "Github":"https://github.com/jitenderji1137",
            "Linkedin":"https://www.linkedin.com/in/jitender1137/",
            "Instagram":"https://www.instagram.com/vijayji1137/",
            "Page":startinput,
            "Limit":endinput,
            "data":Data.data,
            "Repo":"https://github.com/jitenderji1137/movies-database"
        }
        return Result;
    }else if(Data.data.length === 0){
        return "No! Result fount on this..."
    }
    else{
        return "Something went wrong! Please try again";
    }
}
export const Filter_Movies = async(title,value,startinput,endinput)=>{
    if(startinput<=0||endinput<=0){
        return "Input's are Invalid..."
    }
    const start = (startinput-1)*(endinput);
    const end = ((startinput)*(endinput)-1);
    const Data = await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).in(title, value).range(start,end);
    if(Data.data){
        const Result = {
            "Owner":"jitenderji1137",
            "Github":"https://github.com/jitenderji1137",
            "Linkedin":"https://www.linkedin.com/in/jitender1137/",
            "Instagram":"https://www.instagram.com/vijayji1137/",
            "Page":startinput,
            "Limit":endinput,
            "data":Data.data,
            "Repo":"https://github.com/jitenderji1137/movies-database"
        }
        return Result;
    }else if(Data.data.length === 0){
        return "No! Result fount on this..."
    }
    else{
        return "Something went wrong! Please try again";
    }
}
export const Search_By_ID = async(ID)=>{
    const Data = await supabase.from('Free-Netflix-Darabase').select('*').order('ID', { ascending: false }).eq('ID', ID);
    if(Data.data){
        const Result = {
            "Owner":"jitenderji1137",
            "Github":"https://github.com/jitenderji1137",
            "Linkedin":"https://www.linkedin.com/in/jitender1137/",
            "Instagram":"https://www.instagram.com/vijayji1137/",
            "data":Data.data,
            "Repo":"https://github.com/jitenderji1137/movies-database"
        }
        return Result;
    }else if(Data.data.length === 0){
        return "No! Result fount on this..."
    }
    else{
        return "Something went wrong! Please try again";
    }
}