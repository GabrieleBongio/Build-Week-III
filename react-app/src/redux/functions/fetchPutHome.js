import { Token } from "../../token";

export const fetchDataPostHome = (url, datas) => {
    const optionsPut = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token} `,
        },
        body: JSON.stringify(datas),
    };

    console.log("datas", datas);
    fetch(url, optionsPut)
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
