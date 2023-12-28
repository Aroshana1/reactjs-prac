const name = "Aroshana Dissanayake";
const age = "20";

//craete an object
const myObj = {
    name: `${name}`,
    age: `${age}`,
    city: "Peradeniya"
}

function Main1({children,name,city,age})
    {
        //destruct object
        //const {city} = myObj;
        return(<div>This is main component
            <ul>
                <li>{name}</li>
                <li>{age}</li>
                <li>{city}</li>
                <li>{myObj.age}</li>
                <li>{myObj.name}</li>
                

                
            </ul>

            {children}

        </div>)
    }

    export default Main1;