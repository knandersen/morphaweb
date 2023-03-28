export const getBase64 = (file: File) => {
    console.log(file)
    const reader = new FileReaderSync();
    return reader.readAsDataURL(file);
}