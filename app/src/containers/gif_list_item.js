import React from 'react';

const GifListItem = ({ gif }) => {
  console.log({ gif });
  const gifUrl = gif.gif.images.original.url;
  const gifLink = gif.gif.bitly_url;
  const gifID = gif.gif.id;

  return (
    <li>
      <a href={gifLink} target="_blank">
        <div key={gifID}>
          <img src={gifUrl} alt="testing this guy on all of them" />
        </div>
      </a>
    </li>
  );
};

export default GifListItem;
