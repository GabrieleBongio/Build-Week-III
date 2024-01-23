export const fetchDelete = (options, userId, expId) => {
    const URLPOST = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`;

    fetch(URLPOST, options)
        .then((response) => {
            if (!response.ok) {
                throw new Error("qualcosa è andato storto");
            }

            if (response.ok) {
                return response;
            }
        })
        .catch((error) => console.error(error));
};
