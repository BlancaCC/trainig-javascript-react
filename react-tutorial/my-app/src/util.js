

/*
    ObjetvesFromList
    return: Unorder list component to write on the left panne. 
*/
function ObjetivesFromList(props) {
    const component = props.objectives.map(o =>
        <li> {o} </li>);


    return (
        <>
        <ul className="Objective">{component}</ul>
        </>
    );
}


export {ObjetivesFromList};