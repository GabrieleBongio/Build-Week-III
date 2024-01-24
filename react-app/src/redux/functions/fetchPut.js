import { Token } from "../../token";

export const fetchDataPut = (datas, userid, expid) => {
    const URLPUT = `https://striveschool-api.herokuapp.com/api/profile/${userid}/experiences/${expid} `;

    const optionsPut = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token} `,
        },
        data: JSON.stringify(datas),
    };

    fetch(URLPUT, optionsPut)
        .then((response) => {
            if (!response.ok) {
                throw new Error("qualcosa è andato storto");
            }

            if (response.ok) {
                console.log(response);
                return response.json();
            }
        })

        .catch((error) => console.error(error));
};
