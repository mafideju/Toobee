import React from 'react'


export default (props) => {
  const { video, onVideoSelect } = props;
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <a href="#!">
            <img className="media-object" src={imageUrl} alt='miniatura de video' />
          </a>
        </div>

        <div className="media-body">
          <div className="media-heading">
            {title}
            {/* {console.log(video)} */}
          </div>
        </div>
      </div>
    </li>
  )
}
