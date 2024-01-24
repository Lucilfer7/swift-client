import AuthorBooks from "./AuthorBooks";
import AuthorName from "./AuthorName";
import AuthorPic from "./AuthorPic";
import Description from "./Description";
import EditInfoButton from "./EditInfoButton";

const AuthorPage = ({ author, works }) => {
    return (
        <div className="bg-white w-full">
            <div className="w-full h-full flex flex-col pt-5 lg:flex-row md:flex-col sm:flex-col">
                <div className="w-full lg:w-1/3 md:w-full sm:w-full">
                    <AuthorPic author={author} />
                </div>
                <div className="w-full pr-12 lg:w-2/3 md:pl-4 md:w-full sm:w-full">
                    <AuthorName name={author.Name} lastName={author.LastName} />
                    <Description description={author.Description} />
                    <EditInfoButton authorID={author.AuthorID} />
                </div>
            </div>
            <div className="w-full pt-10 md:px-9">
                <h2 className="text-3xl font-semibold italic">Books by {author.Name} {author.LastName}</h2>
                <AuthorBooks author={author} works={works} />
            </div>
        </div>
    );
};

export default AuthorPage;