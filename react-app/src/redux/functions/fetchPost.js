export const fetchDataPost = (optionPost, idUtente, linkEnd) => {
    const URLPOST = `https://striveschool-api.herokuapp.com/api/profile/${idUtente}/${linkEnd}`;

    fetch(URLPOST, optionPost)
        .then((response) => {
            if (!response.ok) {
                throw new Error("qualcosa è andato storto");
            }

            if (response.ok) {
                return response.json();
            }
        })
        .catch((error) => console.error(error));
};
