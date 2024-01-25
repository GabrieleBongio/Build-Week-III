/* import { Token } from "../../token";

export const fetchDataPutHome = async (datas, postId) => {
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

    try {
        const response = await fetch(URLPUT, optionsPut);

        if (!response.ok) {
            throw new Error("Qualcosa è andato storto");
        }

        console.log(response);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}; */
