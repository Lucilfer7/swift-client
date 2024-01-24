import Link from 'next/link';

const AuthorBooks = ({ works }) => {
    return (
        <ul>
            {works.map(work => (
                <li key={work.WorkID}>
                    <Link className='hover:underline' href={`/works/${work.WorkID}`}>{work.WorkTitle}. {work.WorkSubtitle} ({work.WorkPublishingYear})</Link>
                </li>
            ))}
        </ul>
    );
};

export default AuthorBooks;