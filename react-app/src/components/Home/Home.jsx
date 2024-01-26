import React, { useEffect } from "react";
import { fetchData } from "../../redux/functions/fetch";
import { useSelector, useDispatch } from "react-redux";
import { Token } from "../../token";
import { setDataFetchPaginaNotizie, setDataFetchProfilo } from "../../redux/reducers/StateSliceReducers";
import { Container, Row } from "react-bootstrap";
import HomeParteDestra from "./HomeParteDestra";
import HomeParteSinistra from "./HomeParteSinistraSez";
import HomeCentro from "./HomeCentro";

const Home = () => {
    const dispatch = useDispatch();
    const datiPaginaNotizie = useSelector((state) => state.FetchData.dataFetchPaginaNotizie);

    const arrayCommentiTagliato = function () {
        let arrayNotizie = [...datiPaginaNotizie];
        let arrayNotizieTagliato = arrayNotizie.reverse().slice(0, 10);
        console.log("arrayNotizieTagliato", arrayNotizieTagliato);
        return arrayNotizieTagliato;
    };

    useEffect(() => {
        if (datiPaginaNotizie) {
            arrayCommentiTagliato();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [datiPaginaNotizie]);

    const optionsGet = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token} `,
        },
    };

    const fetchingData = async () => {
        dispatch(
            fetchData("https://striveschool-api.herokuapp.com/api/profile/me", "", optionsGet, setDataFetchProfilo)
        );
        dispatch(
            fetchData("https://striveschool-api.herokuapp.com/api/posts/", "", optionsGet, setDataFetchPaginaNotizie)
        );
    };

    useEffect(() => {
        fetchingData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {datiPaginaNotizie && (
                <div id="sezioneNotizie" className="mt-7">
                    <Container>
                        <Row>
                            {/* SIDE SN */}
                            <HomeParteSinistra />
                            {/* CENTRALE */}
                            <HomeCentro />
                            {/* SIDE DX */}
                            <HomeParteDestra />
                        </Row>
                    </Container>
                </div>
            )}
        </>
    );
};

export default Home;
