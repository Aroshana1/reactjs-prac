//const name = "Aroshana Dissanayake";
//const age = "20";

//craete an object
//const myObj = {
//    name: `${name}`,
//    age: `${age}`,
//    city: "Peradeniya"
//}

function Main1({name,city,age,image})
    {
        //destruct object
        //const {city} = myObj;
        return(
        
        <div>
        
        This is main component
        <img src = {image?`${image}`:`https://i.kym-cdn.com/photos/images/facebook/000/918/810/a22.jpg`}
         alt = "jj"/>
        <div className = "mainData">
        <h3>{!name?`no-name`:`${name}`}</h3>
        <p>
            <span>{city}</span>
            <span>{age}</span>
        
        </p>
        </div>
        </div>
        //https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41uc8DXJr+L._AC_UF1000,1000_QL80_.jpg
        
        )
    }

    export default Main1;