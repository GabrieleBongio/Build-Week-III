export const fetchDeleteHome = (options, postId) => {
    const URLPOST = `https://striveschool-api.herokuapp.com/api/posts/${postId}`;

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
