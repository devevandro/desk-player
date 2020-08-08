import React, { useState, useEffect } from 'react';
import './Player.scss';

const Player = () => {
    const [musica, setMusica] = useState([]);

    useEffect(() => {
        setMusica([
            {
                nome: "Castelo Triste",
                artista: "Facção Central",
                time: "03:36"
            },

            {
                nome: "Realidade Cruel",
                artista: "Depoimento de um Viciado",
                time: "07:36"
            },

            {
                nome: "Vida Parte 1",
                artista: "Racionais MC'S",
                time: "07:36"
            },

            {
                nome: "Talvez eu Seja",
                artista: "DMN",
                time: "05:36"
            },

            {
                nome: "Vida Parte 1",
                artista: "Racionais MC'S",
                time: "07:36"
            },

            {
                nome: "Castelo Triste",
                artista: "Facção Central",
                time: "03:36"
            },

            {
                nome: "Realidade Cruel",
                artista: "Depoimento de um Viciado",
                time: "07:36"
            },

            {
                nome: "Vida Parte 1",
                artista: "Racionais MC'S",
                time: "07:36"
            },

            {
                nome: "Talvez eu Seja",
                artista: "DMN",
                time: "05:36"
            },

            {
                nome: "Vida Parte 1",
                artista: "Racionais MC'S",
                time: "07:36"
            },
        ]);
    }, [musica]);

    return (<>
        <div id="disco">
            <img src="/assets/icons/disc.png" alt="" />
        </div>

        {<div id="musics">
            {
                musica.map((el, i) => {
                    return <>
                        <div className="music-card">
                            <span className="qntd">{++i}</span>
                            <span className="name">{el.nome}</span>
                            <span className="artist">{el.artista}</span>
                            <span className="time">{el.time}</span>
                            <div className="white-line"></div>
                        </div>
                    </>
                })
            }
        </div>}

        <div id="music-controls">
            
        </div>
    </>);
}

export default Player;
