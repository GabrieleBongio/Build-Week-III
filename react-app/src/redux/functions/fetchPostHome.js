import { Token } from "../../token";

export const fetchPost = async (url, text, img) => {
    console.log("TEXT_IMG NELLA FETCH ", text, img);

    if (img && text) {
        const formData = new FormData();
        formData.append("text", text);
        formData.append("image", img);

        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${Token} `,
            },

            body: { formData },
        };

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error("Qualcosa è andato storto");
            }

            console.log(response);
            return response.json(); // O gestisci la risposta come preferisci
        } catch (error) {
            console.error(error);
        }
    }

    if (text && !img) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${Token} `,
            },
            body: JSON.stringify({ text }),
        };

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error("Qualcosa è andato storto");
            }

            console.log(response);
            return response.json(); // O gestisci la risposta come preferisci
        } catch (error) {
            console.error(error);
        }
    }
};
