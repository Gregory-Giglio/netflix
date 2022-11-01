
const Section = (props) => {
    // console.log(props);
    return (
        <>
            <h2>{props.movies.category}</h2>
            {/* <img src={props.movies.images[0]} alt="movie image" /> */}
            <div className="movies">
                {props.movies.images.map((movie, index) => {
                    return (
                        <img key={index} src={movie} alt="" />
                    );
                })}
            </div>
        </>
    );
};


export default Section;
