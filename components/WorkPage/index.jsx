import React from 'react';
import WorkPic from './WorkPic';
import WorkTitle from './WorkTitle';
import Description from './Description';
import Link from 'next/link';
import WorkAuthors from './WorkAuthors';

const WorkPage = ({ work, workID }) => {
    const blank = {
        authorsAndRoles: "",
        imagePath: "",
        title: "",
        subtitle: "",
        publishingYear: "",
        description: "",
    };

    const workItem = Array.isArray(work) ? work[0] : work;

    blank.authorsAndRoles = Array.isArray(work)
        ? work.map(item => ({
            AuthorID: item.AuthorID,
            AuthorFullName: `${item.AuthorName} ${item.AuthorLastName}`,
            RoleName: item.RoleName
        }))
        : "";
    blank.imagePath = workItem.WorkImagePath || workItem.ImagePath || "";
    blank.title = workItem.WorkTitle || workItem.Title || "";
    blank.subtitle = workItem.WorkSubtitle || workItem.Subtitle || "";
    blank.publishingYear = workItem.WorkPublishingYear || workItem.PublishingYear || "";
    blank.description = workItem.WorkDescription || workItem.Description || "";
    return (
        <div className="bg-white p-6">
            <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col">
                <div className="w-full lg:w-1/3 md:w-full sm:w-full mb-4 lg:mb-0">
                    <WorkPic title={blank.title} imagePath={blank.imagePath} />
                </div>
                <div className="w-full lg:w-2/3 md:w-full sm:w-full lg:pl-4">
                    <WorkTitle title={blank.title} subtitle={blank.subtitle} publishingYear={blank.publishingYear} />
                    <WorkAuthors authorsAndRoles={blank.authorsAndRoles} />
                    <Description description={blank.description} />
                    <Link href={`/works/edit/${workID}`} className="text-blue-500">
                        Edit information
                    </Link>
                </div>
            </div>
        </div>
    );

};

export default WorkPage;    