import "./Navbar.css";
 
function Navbar() {
 
const scrollToSection = (id)=>{
 
const section = document.getElementById(id);
 
if(section){
  section.scrollIntoView({
   behavior:"smooth",
   block:"start"
  });
}
 
};
 
return (
<nav className="navbar">
 
<h2>Matthew.</h2>
 
<ul>
 
<li onClick={()=>scrollToSection("home")}>
Home
</li>
 
<li onClick={()=>scrollToSection("profile")}>
Profile
</li>
 
<li onClick={()=>scrollToSection("projects")}>
Projects
</li>
 
<li onClick={()=>scrollToSection("contact")}>
Contact
</li>
 
</ul>
 
</nav>
);
}
 
export default Navbar;