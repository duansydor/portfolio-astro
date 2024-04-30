
import { createClient } from '@supabase/supabase-js'
// Create a single supabase client for interacting with your database
export const supabase = createClient(import.meta.env.SUPABASE_API, import.meta.env.SUPABASE_ANON_KEY)



export const getFile = (fileName) => {
    const { data } = supabase.storage.from('portfolioblog').getPublicUrl(fileName)
    return data.publicUrl
}

export const getAllBlogsName = async ()=>{
    let arr = []
    const {data} = await supabase
        .storage
        .from('portfolioblog')
        .list('blog')
        
    data.map(file =>{
        arr.push({url:getFile("blog/"+file.name),name:file.name})
    })
    return arr
}

export async function fetchData(url) {
	try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    return text;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Or handle error differently
  }
}