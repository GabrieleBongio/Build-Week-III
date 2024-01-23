export const fetchDataPut = (option, userid, expid) => {
    const URLPOST = `https://striveschool-api.herokuapp.com/api/profile/${userid}/experiences/${expid} `;

    fetch(URLPOST, option)
        .then((response) => {
            if (!response.ok) {
                throw new Error("qualcosa è andato storto");
            }

            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {})
        .catch((error) => console.error(error));
};
