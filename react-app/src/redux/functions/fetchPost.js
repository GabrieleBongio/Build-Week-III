export const fetchDataPost = (url, options, parametroOpzionale) => {
    fetch(url, options)
        .then((response) => {
            if (!response.ok) {
                throw new Error("qualcosa è andato storto");
            }

            if (response.ok) {
                return response.status;
            }
        })
        .catch((error) => console.error(error));
};
