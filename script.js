document.addEventListener('DOMContentLoaded',function(){
  const tabs=document.querySelectorAll('.tab');
  const contents=document.querySelectorAll('.tabcontent');
  tabs.forEach(t=>t.addEventListener('click',()=>{
    tabs.forEach(x=>x.classList.remove('active'));
    t.classList.add('active');
    const id=t.getAttribute('data-tab');
    contents.forEach(c=>{
      if(c.id===id){c.classList.add('active');c.style.display='block'}else{c.classList.remove('active');c.style.display='none'}
    });
  }));
  // initialize display
  document.querySelectorAll('.tabcontent').forEach((c,i)=>{ if(i!==0) c.style.display='none'; });
});