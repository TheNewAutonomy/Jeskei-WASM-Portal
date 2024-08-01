// wwwroot/js/uploadHelper.js
window.uploadHelper = {
    getFile: function (inputElement) {
        if (inputElement.files.length === 0) {
            return null;
        }

        const file = inputElement.files[0];

        return {
            name: file.name,
            size: file.size,
            type: file.type,
            lastModified: file.lastModified
        };
    },
    readFileAsBase64: function (inputElement) {
        return new Promise((resolve, reject) => {
            const file = inputElement.files[0];
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result.split(',')[1]); // Get Base64 string without prefix
            reader.onerror = error => reject(error);
            reader.readAsDataURL(file);
        });
    }
};
