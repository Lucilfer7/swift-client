import React from 'react';

const AuthorPic = ({author}) => {
    return (
        <div className="flex pb-4 ">
            <img
                src={`http://localhost:8080/images/authors/${author.ImagePath}`} // Reemplaza con la URL de la foto de perfil del autor
                alt={`${author.Name} ${author.LastName}`}
                title={`${author.Name} ${author.LastName}`}
                height={384}
                width={384}
                className="rounded-full h-96 w-96 mx-auto object-cover" // Tamaño y estilo de la imagen
            />
        </div>
    );
};

export default AuthorPic;