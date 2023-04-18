import "./hashtag.scss";
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


async function getHashtag(setHashtags) {

    const response = await fetch(`http://localhost:3001/search/hashtag`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    setHashtags(data);
}

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [hashtags, setHashtags] = useState();

  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }

    return (
        <div></div>

    );
}
export default ControlledCarousel;
