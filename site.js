const { createClient } = supabase;
const db = createClient(window.SUPABASE_URL, window.SUPABASE_KEY);
async function getContent(){const {data,error}=await db.from("site_content").select("*").eq("id",1).single();if(error)throw error;return data}
function put(id,val){const e=document.getElementById(id);if(e)e.textContent=val??""}
async function render(){
 try{
  const d=await getContent();
  ["lawyer_name","lawyer_title","address","phone","email","junior_name","junior_phone","customers","cases","experience","consultations","chamber_time","specialization","education","courts","awards","notice","testimonial","faq"].forEach(k=>put(k,d[k]));
  const {data:g,error}=await db.from("gallery").select("*").order("created_at",{ascending:false}); if(error)throw error;
  const box=document.getElementById("galleryGrid"); box.innerHTML="";
  (g||[]).forEach(x=>{const c=document.createElement("div");c.className="gallery-item";c.innerHTML=(x.file_type==="video"?`<video controls src="${x.file_url}"></video>`:`<img src="${x.file_url}" alt="">`)+`<div class="gallery-caption">${x.title||""}</div>`;box.appendChild(c)});
 }catch(e){console.error(e);document.getElementById("configError").textContent="অনলাইন ডাটাবেস এখনো সংযুক্ত হয়নি। config.js-এ Supabase তথ্য বসাতে হবে।"}
}
render();
