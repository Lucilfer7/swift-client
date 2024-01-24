import Link from 'next/link';

const ListItem = ({ item, itemType, id }) => {
    let displayInfo;
    
    if (itemType === 'works') {
        displayInfo = item.Title;

    } else {
        displayInfo = item.Name;
    }
    return (
        <li>
            <Link className='hover:text-swift-purple-600 hover:underline' href={`/${itemType}/${id}`}>
                {displayInfo}
            </Link>
        </li>
    );
};

export default ListItem;
