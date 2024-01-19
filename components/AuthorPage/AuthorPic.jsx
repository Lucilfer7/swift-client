import React from 'react'

const AuthorPic = ({author}) => {
    return (
        <div className="mb-4">
            <img
                src={`http://localhost:8080/images/authors/${author.ImagePath}`} // Reemplaza con la URL de la foto de perfil del autor
                alt={`${author.Name} ${author.LastName}`}
                className="w-48 h-48 rounded-full mx-auto object-cover" // Tamaño y estilo de la imagen
            />
        </div>
    )
}

export default AuthorPic;