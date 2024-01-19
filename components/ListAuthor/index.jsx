import ListItem from "./ListItem";

const ListAuthor = ({ authors }) => {
  return (
    <ul className="flex flex-wrap mx-4 justify-center items-center">
      {authors.map((author) => (
        <ListItem
          label={`${author.Name} ${author.LastName}`}
          alt={`${author.Name} ${author.LastName}`}
          href={`/authors/${author.AuthorID}`}
          imageSource={`http://localhost:8080/images/authors/${author.ImagePath}`}
          key={author.AuthorID}
        />
      ))}
    </ul>
  );
};

export default ListAuthor;
