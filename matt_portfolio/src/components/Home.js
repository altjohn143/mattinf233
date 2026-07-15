import "./Home.css";
 
function Home(){
 
return(
<section id="home" className="hero">
 
  <div className="left">
   <h3>Hello, I'm</h3>
   <h1>Matthew Olano</h1>
   <p>
    IT Student | React Developer | UI Designer
   </p>
   <button
   onClick={()=>{
    document.getElementById("projects")
    .scrollIntoView({behavior:"smooth"})
   }}>
    View Projects
   </button>
 
  </div>
 
</section>
)
 
}
 
export default Home;