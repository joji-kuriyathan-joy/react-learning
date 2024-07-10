import PropTypes from "prop-types";

function GenericList(props) {
    const category = props.category;
    const itemList = props.item;

    const listItems = itemList.map(item => <li key={item.id}>
        {item.name.toUpperCase()}: &nbsp;
        <b>{item.calories}</b>
    </li>
    );
    return (<>
        <h3 className="list-category">{category}</h3>
        <ol className="listItems">{listItems}</ol>
    </>);
}


GenericList.propTypes = {
    item: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        category: PropTypes.number
    }


    )),
    category: PropTypes.string
}

GenericList.defaultProps = {
    category: "Category",
    item: []
}


export default GenericList;