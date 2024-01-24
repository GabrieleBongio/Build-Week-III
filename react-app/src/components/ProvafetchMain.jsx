import React, { useEffect } from "react";
import { fetchData } from "../redux/functions/fetch";
import { useSelector, useDispatch } from "react-redux";
import { Token } from "../token";
import { setDataFetchPaginaNotizie } from "../redux/reducers/StateSliceReducers";

const options = {
    headers: {
        Authorization: "Bearer " + Token,
    },
};

const ProvafetchMain = () => {
    const dispatch = useDispatch();
    const informazioniProfilo = useSelector((state) => state.FetchData.dataFetchPaginaNotizie);

    useEffect(() => {
        dispatch(
            fetchData("https://striveschool-api.herokuapp.com/api/posts/", "", options, setDataFetchPaginaNotizie)
        );
    }, []);

    return <div></div>;
};

export default ProvafetchMain;
