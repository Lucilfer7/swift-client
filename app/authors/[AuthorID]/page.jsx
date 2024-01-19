import AuthorPage from "@/components/AuthorPage";

const AuthorDetailPage = ({ params: { AuthorID } }) => {
  return (
    <div className="container mx-auto py-8">
      
      <AuthorPage AuthorID={AuthorID} />
    </div>
  );
};

export default AuthorDetailPage;
