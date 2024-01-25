import React, { useEffect, useState } from "react";

import { fetchData } from "../redux/functions/fetch";
import { useSelector, useDispatch } from "react-redux";
import { Token } from "../token";
import { setDataFetchPaginaNotizie, setDataFetchProfilo } from "../redux/reducers/StateSliceReducers";
import { Button, Col, Container, FormControl, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {
    CalendarFill,
    EnvelopePaperFill,
    HandThumbsUpFill,
    ChatDotsFill,
    Shuffle,
    SendExclamationFill,
} from "react-bootstrap-icons";
import { fetchPost } from "../redux/functions/fetchPostHome";
import { fetchDeleteHome } from "../redux/functions/fetchDeleteHome";
import HomeParteDestra from "./HomeParteDestra";
import HomeParteSInistra from "./HomeParteSinistraSez";
import { postImageHome } from "../redux/functions/postImageHome";

const Home = () => {
    const urlpostHome = "https://striveschool-api.herokuapp.com/api/posts/";
    const dispatch = useDispatch();
    const datiPaginaNotizie = useSelector((state) => state.FetchData.dataFetchPaginaNotizie);

    const { dataFetchProfilo } = useSelector((state) => state.FetchData);
    const [datiPost, setDatiPost] = useState("");
    /*     const [image, setImage] = useState(null); */

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

    console.log("datiPaginaNotizie", datiPaginaNotizie);
    console.log("dataFetchProfilo", dataFetchProfilo);

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

    const handleSubmitHome = async (event) => {
        event.preventDefault();

        await fetchPost(urlpostHome, datiPost.text);
        setDatiPost("");
        dispatch(
            fetchData("https://striveschool-api.herokuapp.com/api/posts/", "", optionsGet, setDataFetchPaginaNotizie)
        );
    };

    const optionsDelete = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token} `,
        },
    };
    const handleDelete = async (commentID) => {
        await fetchDeleteHome(optionsDelete, commentID);
        dispatch(
            fetchData("https://striveschool-api.herokuapp.com/api/posts/", "", optionsGet, setDataFetchPaginaNotizie)
        );
    };

    const addImgToComment = async (event, postid) => {
        event.preventDefault();
        console.log("ciao");
        const formData = new FormData(event.target);
        dispatch(postImageHome(postid, formData));
        dispatch(
            fetchData("https://striveschool-api.herokuapp.com/api/posts/", "", optionsGet, setDataFetchPaginaNotizie)
        );
    };

    return (
        <>
            {datiPaginaNotizie && (
                <div id="sezioneNotizie" className="mt-7">
                    <Container>
                        <Row>
                            {/* SIDE SN */}
                            <HomeParteSInistra />
                            {/* CENTRALE */}
                            <Col xs="12" sm="12" md="12" lg="8" xl="6">
                                {/* aggiungi un post  */}
                                <div className="bg-white p-2 rounded-2">
                                    <Row>
                                        <div className="d-flex align-items-center gap-2">
                                            <img
                                                className="rounded-circle"
                                                width={"50px"}
                                                height={"50px"}
                                                src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
                                                alt="img profilo"
                                            />
                                            <Form onSubmit={handleSubmitHome} className="d-flex w-100 gap-3">
                                                <FormControl
                                                    className="w-100"
                                                    placeholder="Avvia un post..."
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                    onChange={(event) => setDatiPost({ text: event.target.value })}
                                                    value={datiPost.text}
                                                />

                                                <Button type="submit" variant="primary">
                                                    <SendExclamationFill />
                                                </Button>
                                            </Form>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="d-flex justify-content-center gap-5 my-2">
                                            <div className="d-flex align-items-center gap-1">
                                                <CalendarFill fontSize={"22"} /> <p className="m-0">Evento</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-1">
                                                <EnvelopePaperFill fontSize={"22"} />
                                                <p className="m-0">Scrivi un articolo</p>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                                {/* sezione notizie  */}
                                {arrayCommentiTagliato().map((post) => (
                                    <div key={`post -${post._id}`} className="bg-white my-2 border rounded-3">
                                        <Row>
                                            <Col>
                                                <div>
                                                    <div>
                                                        <div className="d-flex gap-2 my-2 p-2">
                                                            <div>
                                                                <div>
                                                                    <img
                                                                        className="rounded-circle"
                                                                        width={"50px"}
                                                                        height={"50px"}
                                                                        src={post.user.image}
                                                                        alt="immagine profilo"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="me-auto">
                                                                <div>
                                                                    <h6 className="fw-bold m-0 fs-6">
                                                                        {post.user.name} {post.user.surname}
                                                                    </h6>
                                                                </div>
                                                                <div>
                                                                    <p className="m-0 fs-7 text-secondary">
                                                                        {post.user.title}
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <p className="m-0 fs-7 text-secondary">
                                                                        {post.user.email}
                                                                    </p>
                                                                </div>
                                                            </div>{" "}
                                                            <div>
                                                                {post.user.email === dataFetchProfilo.email ? (
                                                                    <Button
                                                                        onClick={() => {
                                                                            handleDelete(post._id);
                                                                        }}
                                                                        variant="trasparent"
                                                                    >
                                                                        ❌
                                                                    </Button>
                                                                ) : (
                                                                    ""
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <Col>
                                                    <div className="px-2">
                                                        {" "}
                                                        <p className="m-0 mx-2 mb-3">{post.text}</p>
                                                    </div>
                                                    <div className="d-flex justify-content-center">
                                                        {" "}
                                                        <img
                                                            className="rounded-3"
                                                            width={"95%"}
                                                            src={post.image}
                                                            alt="immagine"
                                                        />
                                                    </div>
                                                    <div className="d-flex justify-content-center flex-grow-1">
                                                        <div className="d-flex justify-content-center  ">
                                                            <div className="d-flex column-gap-5 flex-wrap">
                                                                <div className="d-flex align-items-center p-1 gap-2 m-1">
                                                                    <HandThumbsUpFill fontSize={"25"} />{" "}
                                                                    <Button className="p-0" variant="transparent">
                                                                        <p className="m-0 fs-7">Consiglia</p>
                                                                    </Button>
                                                                </div>
                                                                <div className="d-flex align-items-center p-1 gap-2 m-1">
                                                                    <ChatDotsFill fontSize={"25"} />{" "}
                                                                    <Button className="p-0" variant="transparent">
                                                                        <p className="m-0 fs-7">Commenta</p>
                                                                    </Button>
                                                                </div>
                                                                <div className="d-flex align-items-center p-1 gap-2 m-1">
                                                                    <Shuffle fontSize={"25"} />{" "}
                                                                    <Button className="p-0" variant="transparent">
                                                                        <p className="m-0 fs-7">Diffondi il Post</p>
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                            <div className="my-3">
                                                                {post.user.email === "antonio.rizzuti@hotmail.com" ? (
                                                                    <Form
                                                                        className="d-flex align-items-center"
                                                                        onSubmit={(event) => {
                                                                            addImgToComment(event, post._id);
                                                                        }}
                                                                    >
                                                                        <Form.Control
                                                                            name="post"
                                                                            type="file"
                                                                            accept="image/*"
                                                                        />
                                                                        <Button variant="transparent" type="submit">
                                                                            {" "}
                                                                            Aggiungi immagine{" "}
                                                                        </Button>
                                                                    </Form>
                                                                ) : (
                                                                    ""
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Col>
                                        </Row>
                                    </div>
                                ))}
                            </Col>
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
