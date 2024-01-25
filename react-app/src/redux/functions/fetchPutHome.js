import { Token } from "../../token";

export const fetchDataPutHome = (datas, postId) => {
    const URLPUT = `https://striveschool-api.herokuapp.com/api/posts/${postId}`;

    const optionsPut = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token} `,
        },
        body: JSON.stringify(datas),
    };

    console.log("datas", datas);
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
