import React, { useEffect, useState } from "react";

import { fetchData } from "../redux/functions/fetch";
import { useSelector, useDispatch } from "react-redux";
import { Token } from "../token";
import { setDataFetchPaginaNotizie, setDataFetchProfilo } from "../redux/reducers/StateSliceReducers";
import { Button, Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {
    CalendarFill,
    EnvelopePaperFill,
    HandThumbsUpFill,
    ChatDotsFill,
    Shuffle,
    SendExclamationFill,
    GearFill,
} from "react-bootstrap-icons";
import { fetchPost } from "../redux/functions/fetchPostHome";
import { fetchDeleteHome } from "../redux/functions/fetchDeleteHome";
import HomeParteDestra from "./HomeParteDestra";
import HomeParteSInistra from "./HomeParteSinistraSez";
import { postImageHome } from "../redux/functions/postImageHome";
import { postImage } from "../redux/functions/postImage";

const Home = () => {
    const urlpostHome = "https://striveschool-api.herokuapp.com/api/posts/";
    const dispatch = useDispatch();
    const datiPaginaNotizie = useSelector((state) => state.FetchData.dataFetchPaginaNotizie);

    const { dataFetchProfilo } = useSelector((state) => state.FetchData);
    const [datiPost, setDatiPost] = useState("");
    const [image, setImage] = useState(null);

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
    }, [datiPaginaNotizie]);

    /*     const [arrayCommenti, setArrayCommenti] = useState([]) */
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
        /* prendo info del profilo */
        await dispatch(
            fetchData("https://striveschool-api.herokuapp.com/api/profile/me", "", optionsGet, setDataFetchProfilo)
        );
        /* faccio fetch pagina notizie  */
        await dispatch(
            fetchData("https://striveschool-api.herokuapp.com/api/posts/", "", optionsGet, setDataFetchPaginaNotizie)
        );
    };

    useEffect(() => {
        fetchingData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmitHome = async (event) => {
        event.preventDefault();
        /* post dell immagine e testo  */
        await fetchPost(urlpostHome, datiPost.text);
        /* post del testo  */
        /* await fetchPost(urlpostHome, datiPost); */
        setDatiPost("");
        await dispatch(
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

        setTimeout(() => {
            dispatch(
                fetchData(
                    "https://striveschool-api.herokuapp.com/api/posts/",
                    "",
                    optionsGet,
                    setDataFetchPaginaNotizie
                )
            );
        }, 500);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        // Fai qualcosa con il file, come impostarlo nello stato del componente
        setImage(file);
    };

    const addImgToComment = (event, postid) => {
        event.preventDefault();
        console.log("ciao");
        const formData = new FormData(event.target);
        dispatch(postImageHome(postid, formData));
        setTimeout(() => {
            dispatch(
                fetchData(
                    "https://striveschool-api.herokuapp.com/api/posts/",
                    "",
                    optionsGet,
                    setDataFetchPaginaNotizie
                )
            );
        }, 800);
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
                            <Col xs="12" sm="12" md="9" lg="7">
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
                                                {/*     <input type="file" onChange={handleImageChange} accept="image/*" /> */}
                                                <Button type="submit" variant="primary">
                                                    <SendExclamationFill />
                                                </Button>
                                            </Form>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="d-flex justify-content-center gap-4 my-2">
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
                                                            </div>
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
                                                        <div className="d-flex justify-content-end column-gap-5 flex-wrap">
                                                            <div className="d-flex align-items-center p-1 gap-2">
                                                                <HandThumbsUpFill fontSize={"25"} />{" "}
                                                                <Button className="p-0" variant="transparent">
                                                                    <p className="m-0 fs-7">Consiglia</p>
                                                                </Button>
                                                            </div>
                                                            <div className="d-flex align-items-center p-1 gap-2">
                                                                <ChatDotsFill fontSize={"25"} />{" "}
                                                                <Button className="p-0" variant="transparent">
                                                                    <p className="m-0 fs-7">Commenta</p>
                                                                </Button>
                                                            </div>
                                                            <div className="d-flex align-items-center p-1 gap-2">
                                                                <Shuffle fontSize={"25"} />{" "}
                                                                <Button className="p-0" variant="transparent">
                                                                    <p className="m-0 fs-7">Diffondi il Post</p>
                                                                </Button>
                                                            </div>
                                                            <div className="d-flex align-items-center p-1 py-3 gap-2">
                                                                <SendExclamationFill fontSize={"25"} />{" "}
                                                                <Button className="p-0" variant="transparent">
                                                                    <p className="m-0 fs-7">Invia</p>
                                                                </Button>
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

                            {/* DA ELIMINARE  DA ELIMINARE  DA ELIMINARE  DA ELIMINARE  DA ELIMINARE  */}
                            {datiPaginaNotizie.map((miocommento) => (
                                <>
                                    {" "}
                                    {miocommento.user.email === "antonio.rizzuti@hotmail.com" ? (
                                        <div
                                            key={`post-il mio-${miocommento._id}`}
                                            className="bg-white my-2 border rounded-3"
                                        >
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
                                                                            src={miocommento.user.image}
                                                                            alt="immagine profilo"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="me-auto">
                                                                    <div>
                                                                        <h6 className="fw-bold m-0 fs-6">
                                                                            {miocommento.user.name}{" "}
                                                                            {miocommento.user.surname}
                                                                        </h6>
                                                                    </div>
                                                                    <div>
                                                                        <p className="m-0 fs-7 text-secondary">
                                                                            {miocommento.user.title}
                                                                        </p>
                                                                    </div>
                                                                    <div>
                                                                        <p className="m-0 fs-7 text-secondary">
                                                                            {miocommento.user.email}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    {miocommento.user.email ===
                                                                    dataFetchProfilo.email ? (
                                                                        <Button
                                                                            onClick={() => {
                                                                                handleDelete(miocommento._id);
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
                                                            <p className="m-0 mx-2 mb-3">{miocommento.text}</p>
                                                        </div>
                                                        <div className="d-flex justify-content-center">
                                                            {" "}
                                                            <img
                                                                className="rounded-3"
                                                                width={"95%"}
                                                                src={miocommento.image}
                                                                alt="immagine"
                                                            />
                                                        </div>
                                                        <div className="d-flex justify-content-center flex-grow-1">
                                                            <div className="d-flex justify-content-end column-gap-5 flex-wrap">
                                                                <div className="d-flex align-items-center p-1 gap-2">
                                                                    <HandThumbsUpFill fontSize={"25"} />{" "}
                                                                    <Button className="p-0" variant="transparent">
                                                                        <p className="m-0 fs-7">Consiglia</p>
                                                                    </Button>
                                                                </div>
                                                                <div className="d-flex align-items-center p-1 gap-2">
                                                                    <ChatDotsFill fontSize={"25"} />{" "}
                                                                    <Button className="p-0" variant="transparent">
                                                                        <p className="m-0 fs-7">Commenta</p>
                                                                    </Button>
                                                                </div>
                                                                <div className="d-flex align-items-center p-1 gap-2">
                                                                    <Shuffle fontSize={"25"} />{" "}
                                                                    <Button className="p-0" variant="transparent">
                                                                        <p className="m-0 fs-7">Diffondi il Post</p>
                                                                    </Button>
                                                                </div>
                                                                <div className="d-flex align-items-center p-1 py-3 gap-2">
                                                                    <GearFill fontSize={"25"} />{" "}
                                                                    <Button className="p-0" variant="transparent">
                                                                        <p className="m-0 fs-7">Modifica</p>
                                                                    </Button>
                                                                    <Form
                                                                        onSubmit={(event) => {
                                                                            addImgToComment(event, miocommento._id);
                                                                        }}
                                                                    >
                                                                        <input
                                                                            name="post"
                                                                            type="file"
                                                                            accept="image/*"
                                                                            onChange={handleImageChange}
                                                                        />
                                                                        <button type="submit"> modifica post </button>
                                                                    </Form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Col>
                                            </Row>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </>
                            ))}
                        </Row>
                    </Container>
                </div>
            )}
        </>
    );
};

export default Home;
