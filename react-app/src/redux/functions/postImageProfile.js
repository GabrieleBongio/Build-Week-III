export const postImageProfile = (userId, options) => async (dispatch) => {
  try {
    // Set to true before fetching
    const fetchResponse = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`, options);

    if (!fetchResponse.ok) {
      if (fetchResponse.status > 400 && fetchResponse.status < 500) {
        if (fetchResponse.status === 429) {
          throw new Error("429 INFAME PER TE TANTE COSE BRUTTE");
        } else {
          throw new Error("STAI CAPPELLANDO , RIGUARDA QUELLO CHE HAI SCRITTO");
        }
      }
      if (fetchResponse.status > 500 && fetchResponse.status < 600) {
        throw new Error("SERVER SPOMPATO, NON FUNZIA??");
      }
    }

    const fetchData = await fetchResponse.json();
    console.log(fetchData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
