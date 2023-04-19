import React, { useState, useEffect } from 'react';
import './UserChannel.scss';
import axios from 'axios';
import profilePhoto from './chat.jpg';

export default function UserChannel({ action, name }) {

    // Déclare la variable local pour la connexion

    /* axios.post('http://localhost:3001/users/getUserId', {
        hashedUserId : JSON.parse(localStorage.getItem('hashed_user_id'))
    })
    .then(response => {
        console.log('user Id', response.data);
        const localId = response.data;
    })
    .catch(error => {
        console.log('error', error.response.data)
    }); */

    const localId = localStorage.getItem('user_id');

    // Si on n'est pas connecté, renvoie vers la page connexion

    if (!localId) {
        window.location.href= '/connexion';
    };

    // Déclare les variables
    const [users, setUser] = useState([]);
    const [buttonText, setButtonText] = useState(localStorage.getItem("buttonText") || "S'abonner");
    const [buttonColor, setButtonColor] = useState(localStorage.getItem("buttonColor") || "black");

    //  Afficher les profils en les récupérant dans la base de données

    const getUserChannel = async () => {
        var currentUrl = window.location.href
        var split = currentUrl.split('/')
        const nom = split[split.length-1];

        console.log(nom)
        try {
            const reponse = await axios.get(`http://localhost:3001/users/getUserBis/${nom}`)
            setUser(reponse.data[0]);
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getUserChannel();
    }, []);

    // Concerne le bouton "s'abonner"

    const subscribed = () => {
        if (buttonText === "S'abonner") {
            setButtonText("Se désabonner");
            setButtonColor("blue");
        } else {
            setButtonText("S'abonner");
            setButtonColor("black");
        }
        localStorage.setItem("buttonText", buttonText);
        localStorage.setItem("buttonColor", buttonColor);
    };

    // Partie HTML

    return (
        <div className='wrapperUserProfile'>
            <div className='profileUserBis'>
                <img id='pictureUserBis' src={users.image_link} alt='profile' />
            </div>
            <div className='profileUserBis'>
                {/* Récupère les données de la base de données grâce à la requête SQL */}
                <p className='pseudoUsername'>{users.name}</p>
                <p>{users.subscribers} abonnés {users.number_videos} vidéos</p>
                <p>{users.description_channel}</p>
            </div>
            {action ? (
                <div className='profileUserBis'>
                    <button className='updateUserProfile' type='submit' onClick={subscribed} style={{ backgroundColor: buttonColor }}>
                        {buttonText}
                    </button>
                </div>
            ) : (
                <div className='profileUserBis'>
                    <button className='updateUserProfile' type='submit'>
                        Personnaliser sa chaîne
                    </button>
                </div>
            )}
        </div>
    );
};