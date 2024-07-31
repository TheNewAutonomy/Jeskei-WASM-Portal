// wwwroot/js/uploadHelper.js
window.uploadHelper = {
    getFile: function (inputElement) {
        return new Promise((resolve, reject) => {
            if (inputElement.files.length === 0) {
                resolve(null);
            } else {
                resolve(inputElement.files[0]);
            }
        });
    }
};
