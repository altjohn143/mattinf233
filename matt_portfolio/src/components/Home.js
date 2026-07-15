import "./Home.css";
 
function Home(){
    return(
        <section className="hero">
 
            <div className="left">
                <h3>Hello, I'm</h3>
                <h1>John Matthew Olano</h1>
 
                <p>
                    IT Student | Website & Mobile Developer
                </p>
 
                <button>View Projects</button>
            </div>
 
            <div className="right">
                <img
                src="https://i.pravatar.cc/300"
                alt=""
                />
            </div>
 
        </section>
    )
}
 
export default Home;