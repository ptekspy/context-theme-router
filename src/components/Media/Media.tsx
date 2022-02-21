import React, { useState, useEffect } from 'react';
import './Media.css';
const defaultImage = require('../../logo192.png')

export default function Media(props: any) {
  const [isLoading, setIsLoading] = useState(true)
  const [content, setContent] = useState(defaultImage);
  const [contentType, setContentType] = useState('none')
  const SUPPORTED_MEDIA_FORMATS = ['image', 'audio', 'video']

  useEffect(() => {
    if (isLoading === true) {
      fetch(props.url).then(response => response.blob()).then(async blob => {
        console.log(`here`)
        if (SUPPORTED_MEDIA_FORMATS.includes(blob.type.split("/")[0])) {
          const url = URL.createObjectURL(blob);
          setContentType(blob.type.split("/")[0]);
          setContent(url);
        } else {
          console.log(`blob.type ${blob.type}`)
        }
      });
      setIsLoading(false);
    }
  }, [])

  return (
    <>
      <div className="media-viewer">
        <div>
          {contentType === 'image' ?
            <img className="image-media" src={content} alt=""/>
            : contentType === 'video' ?
              <video
                className="video-media"
                src={content}
                autoPlay
                muted
                controls
                loop
              />
              :
              <span>nothing</span>
          }
          <span>{contentType}</span>
        </div>
      </div>
    </>
  );
}
