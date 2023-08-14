import PhotoAlbum from "react-photo-album";
import React from "react";

const photos = [
    { src: "../../assets/img/mystory.png", width: 800, height: 600 },
    { src: "../../assets/img/nationalgames.jpg", width: 1600, height: 900 },
];
const Gallery=()=> {
    return <PhotoAlbum layout="rows" photos={photos} />;
}

export default Gallery;