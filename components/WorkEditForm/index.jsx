import React, { useState, useEffect } from 'react';
import Textarea from '../Form/Textarea';
import Input from '../Form/Input';
import CustomFileInput from '../Form/FileInput';

const EditWorkForm = ({ work, handleFileChange, handleInputChange, file }) => {
    return (
        <div className='w-full'>
            <Input name="WorkTitle" label="Title" value={work.WorkTitle} handleChange={handleInputChange} />
            <Input name="WorkSubtitle" label="Subtitle" value={work.WorkSubtitle} handleChange={handleInputChange} />
            <Input name="WorkOriginalTitle" label="Original Title" value={work.WorkOriginalTitle} handleChange={handleInputChange} />
            <Input name="WorkPublishingYear" label="Publishing Year" value={work.WorkPublishingYear} handleChange={handleInputChange} />
            <Textarea name="WorkDescription" label="Description" value={work.WorkDescription} handleChange={handleInputChange} />
            <CustomFileInput label="Work cover" onChange={handleFileChange} fileName={file.name} />
        </div>
    );
};

export default EditWorkForm;
