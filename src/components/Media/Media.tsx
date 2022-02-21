import React, { useState, useEffect } from 'react';
import './Media.css';
const defaultImage = require('../../logo192.png')

export default function Media(props:any) {
  const [isLoading, setIsLoading] = useState(true)
  const [content, setContent] = useState(defaultImage);
  const [contentType, setContentType] = useState('none')

  useEffect(() => {
    console.log(`called dynamic media function ${contentType}`)
    // const myUrl=`https://ipfs.io/ipfs/QmWJ3HnbLKm3WM2rkjugbUJ1tNj5iWLb8ZbUJUw5GkhWmJ`
    // const myUrl=`https://ipfs.io/ipfs/QmcNtgAdi9fnHWHQa5QxWLFtRYNuyiHCe8VJyYXxLm55HX`
    if(isLoading === true){
      fetch(props.url).then(response => response.blob()).then(async blob => {
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
      setIsLoading(false);
    }


    //await console.log(contentSpecific)
  })

  return (
        <>
          <div className="media-viewer">
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
