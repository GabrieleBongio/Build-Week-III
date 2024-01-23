export const fetchDataPost = (optionPost, idUtente) => {
    const URLPOST = `https://striveschool-api.herokuapp.com/api/profile/${idUtente}/experiences`;

    fetch(URLPOST, optionPost)
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
