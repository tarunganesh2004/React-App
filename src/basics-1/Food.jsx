// @ts-nocheck

function Food() {
    
    const food1 = "apple"; // so we cant directly use these in the html instead we use {variableName}
    const food2 = "banana";


    return (
        <ul>
            <li>Grapes</li>
            <li>{food1}</li>
            <li>{ food2.toUpperCase()}</li> 
        </ul>
    );
}
export default Food