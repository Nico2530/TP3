const InputFile = ({ handleFileUpload }) => {

    const handleFileChange = (e) => {
        if (e.target.value === '') {
            handleFileUpload(null);
        } else {
            const fileType = e.target.files[0].type;
            if (fileType.startsWith('image/')) {
                handleFileUpload(e.target.files[0]);
            } else {
                window.alert('Por favor, seleccione un archivo de tipo imagen');
                e.target.value = '';
                handleFileUpload(null);
            }
        }
    };

    return (
        <input type="file" name="image" id="imageInput" accept="image/*" onChange={handleFileChange} />
    );
};

export default InputFile;