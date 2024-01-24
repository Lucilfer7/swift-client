import ListItem from './ListItem';

const List = ({ list, listType, idField }) => {
    return (
        <ul>
            {
                list.map((item) =>
                    <ListItem item={item} itemType={listType} key={item[idField]} id={item[idField]} />
                )
            }
        </ul>
    );
};

export default List;


