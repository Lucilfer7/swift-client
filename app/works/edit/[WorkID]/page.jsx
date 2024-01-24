"use client";
import Form from '@/components/Form';
import Submit from '@/components/Form/Submit';
import EditWorkForm from '@/components/WorkEditForm';
import LinkAuthorsToWorkForm from '@/components/WorkEditForm/LinkAuthorsToWorkForm';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const EditWork = ({ params }) => {
    const router = useRouter();
    const [selectedAuthors, setSelectedAuthors] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [authorCountMap, setAuthorCountMap] = useState({});
    const [selectedRoles, setSelectedRoles] = useState({});
    const [work, setWork] = useState({
        WorkID: 0,
        WorkTitle: "",
        WorkSubtitle: "",
        WorkOriginalTitle: "",
        WorkDescription: "",
        WorkImagePath: "",
        WorkPublishingYear: "",
        Authors: [],
    });
    const [file, setFile] = useState({
        name: "",
        size: 0,
        type: "",
        lastModified: 0,
        lastModifiedDate: {},
    });

    const handleInputChange = ({ target: { name, value } }) => {
        setWork((prevWork) => ({
            ...prevWork,
            [name]: value,
        }));
    };

    const handleFileChange = ({ target: { files } }) => {
        setFile(files[0]);
    };

    const validateSelectedAuthors = useCallback(() => {
        const newSelectedAuthors = [];
        const newAuthorCountMap = { ...authorCountMap };

        selectedAuthors.forEach((authorId) => {
            const authorCount = newAuthorCountMap[authorId];

            if (authorCount <= 3) {
                newSelectedAuthors.push(authorId);
            };
        });

        return newSelectedAuthors;
    }, [authorCountMap, selectedAuthors]);

    async function fetchWorkData() {
        const URL = `http://localhost:8080/works/full/${params.WorkID}`;
        try {
            const { data } = await axios.get(URL);
            if (data[0]) {
                const editedWork = {
                    WorkID: data[0].WorkID,
                    WorkTitle: data[0].WorkTitle,
                    WorkSubtitle: data[0].WorkSubtitle,
                    WorkOriginalTitle: data[0].WorkOriginalTitle,
                    WorkDescription: data[0].WorkDescription,
                    WorkImagePath: data[0].WorkImagePath,
                    WorkPublishingYear: data[0].WorkPublishingYear,
                    Authors: data.map(author => ({
                        AuthorID: author.AuthorID,
                        AuthorName: author.AuthorName,
                        AuthorLastName: author.AuthorLastName,
                        RoleID: author.RoleID,
                        RoleName: author.RoleName
                    }))
                };
                setWork(editedWork)
            }
        } catch (error) {
            console.error("Error fetching work data:", error);
            return null;
        }
    }

    useEffect(() => {
        fetchWorkData();
        setLoading(false);
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("Work actualizado:", work);

            // Aquí puedes realizar la lógica para enviar la información actualizada a la API
            // ...

            // Manejar la lógica para vincular autores al trabajo
            // const validatedAuthors = validateSelectedAuthors();
            // await Promise.all(validatedAuthors.map(async (authorId) => {
            //     await axios.post(`${URL}/works/${work.WorkID}/link-authors`, {
            //         authorId,
            //         WorkID: work.WorkID,
            //         RoleID: selectedRoles[authorId],
            //     });
            // }));

            // setSelectedAuthors([]);
            // setSelectedRoles([]);
            // router.push(`/works/${work.WorkID}`);
        } catch (error) {
            console.error('There was an error:', error);
        }
    };

    return (
        <div className='w-full min-h-screen container mx-auto flex flex-col justify-center items-center'>
            <h1 className='text-3xl'>Edit Work</h1>
            <Form handleSubmit={handleFormSubmit}>
                <EditWorkForm work={work} handleInputChange={handleInputChange} handleFileChange={handleFileChange} file={file} />
                <LinkAuthorsToWorkForm
                    authorCountMap={authorCountMap}
                    setAuthorCountMap={setAuthorCountMap}
                    selectedAuthors={selectedAuthors}
                    setSelectedAuthors={setSelectedAuthors}
                />
                <Submit>Save</Submit>
            </Form>
        </div>
    );
};

export default EditWork;