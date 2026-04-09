import HeroImg from "../assets/images/banner-img.webp";

function Hero(){
    return(
        <>
            <section 
                className="bg-center pt-[55px] md:pt-[72px] bg-amber-400 bg-no-repeat"
                style={{backgroundImage: `url(${HeroImg})`, backgroundSize: "cover"}}
            >
                <div className="max-w-7xl mx-auto p-5 md:py-[60px]">
                    <div className="">
                        <h1 className="text-[55px] font-bold">Welcome</h1>
                        <h2 className="text-[24px] md:text-[32px] font-medium">Millions of movies, TV shows and people to discover. Explore now.</h2>
                    </div>
                    <div className="max-w-7xl pt-[30px] ">
                        <input type="text" name="searchBar" id="" placeholder="Search for Movie..." 
                          className="md:w-[90%] bg-white text-gray-700 py-2 px-5 rounded-l-[20px]"/>
                        <button className="md:w-[10%] bg-[#1cb8d7] rounded-r-[20px] hover:bg-white hover:text-[#1cb8d7] py-2 px-5 transition-colors">Search</button>
                    </div>
                    
                </div>
            </section>
        </>
    );
}


export default Hero;