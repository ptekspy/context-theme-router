import React, { useState, useEffect } from 'react';
import './Media.css';
const defaultImage = require('../../logo192.png')

export default function Media() {
  const [content, setContent] = useState(defaultImage);
  const [contentType, setContentType] = useState('none')

  const getMedia = (url:string) => {
    console.log(`called dynamic media function`)
    // const myUrl=`https://ipfs.io/ipfs/QmWJ3HnbLKm3WM2rkjugbUJ1tNj5iWLb8ZbUJUw5GkhWmJ`
    // const myUrl=`https://ipfs.io/ipfs/QmcNtgAdi9fnHWHQa5QxWLFtRYNuyiHCe8VJyYXxLm55HX`
    fetch(url).then(response => response.blob()).then(async blob => {
      console.log(`here`)
      if(blob.type === 'image/gif'){
        console.log(blob);
        let url = URL.createObjectURL(blob);
        console.log(url)
        setContentType('image');
        setContent(url);
      }else if(blob.type === 'video/mp4'){
        console.log(blob);
        let url = URL.createObjectURL(blob);
        console.log(url)
        setContentType('video');
        setContent(url);
      }else{
        console.log(`blob.type ${blob.type}`)
      }
    });
    //await console.log(contentSpecific)
  }

  return (
        <>
          <div className="media-viewer">
            <div onClick={()=> {getMedia(`https://ipfs.io/ipfs/QmWJ3HnbLKm3WM2rkjugbUJ1tNj5iWLb8ZbUJUw5GkhWmJ`)}}>click for image</div>
            <div onClick={()=> {getMedia(`https://ipfs.io/ipfs/QmcNtgAdi9fnHWHQa5QxWLFtRYNuyiHCe8VJyYXxLm55HX`)}}>click for video</div>
            <div>
                {(contentType === 'image')?
                  <img width="400" src={content} />
                  :
                    (contentType === 'video')?
                    <video width="400" src={content} />
                    :
                    <span>nothing</span>
                }
                <span>{contentType}</span>
            </div>
          </div>
        </>
  );
}
