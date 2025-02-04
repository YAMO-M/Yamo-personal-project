import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

export default function SongPlayer() {
  // State to hold the current song URL and playing state
  const [songUrl, setSongUrl] = useState("");
  const [playing, setPlaying] = useState(false);

  // Function to handle when a song is clicked
  const handleSongClick = (url) => {
    // If the same song is clicked again, toggle play/pause
    if (songUrl === url) {
      setPlaying(!playing); // Toggle the playing state
    } else {
      setSongUrl(url); // Set new song URL
      setPlaying(true); // Start playing the new song
    }
  };

  return (
    <>
      <div className="justify-self-start text-center ml-10 ali">
        <h1 className="text-7xl"> Hit List</h1>
        <h6 className="text-gray-600">Hip Hop</h6>
        <ul className="text-3xl">
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick(
                  "https://youtu.be/fibYknUCIU4?si=0YSFvuVNucutE1HW"
                )
              }
            >
              NF-CLOUDS
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick(
                  "https://youtu.be/BhgGQuIH72s?si=teXaOgyPHfLg-4iE"
                )
              }
            >
              Before I'm Gone
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick(
                  "https://youtu.be/JwAjANmjajc?si=RTuPWAKU681VBEda"
                )
              }
            >
              Family Business
            </a>
          </li>
        </ul>
        <h6 className="text-gray-600">Amapiano</h6>
        <ul className="text-3xl">
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick(
                  "https://youtu.be/6gZllkNoclw?si=NiB_6WV82NuYRWh7"
                )
              }
            >
              Rekere 6
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick(
                  "https://youtu.be/fev32spxa1s?si=F3hbtfXjH7WsGxIP"
                )
              }
            >
              Rekere 9
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick(
                  "https://youtu.be/WkXFawmvdZ4?si=ti5SQyhbmWIijbzH"
                )
              }
            >
              iLog Drum
            </a>
          </li>
        </ul>
        <h6 className="text-gray-600">Maskandi</h6>
        <ul className="text-3xl">
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick(
                  "https://youtu.be/YaVindKjKlg?si=wlIcG6Khf6YCRsM0"
                )
              }
            >
              Ubaba KaBafana
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick(
                  "https://youtu.be/4sbQNPIo3Cw?si=373kX6x1Tol-rbG6"
                )
              }
            >
              Vele Sekonakele
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick(
                  "https://youtu.be/3DnP99Tulnk?si=ByfpOo3gvrHtaGCB"
                )
              }
            >
              Bamphambanisela
            </a>
          </li>
        </ul>
        <h6 className="text-gray-600">Old School</h6>
        <ul className="text-3xl">
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick(
                  "https://youtu.be/PhY7KeOO9oQ?si=k4sL7nWCPPmyv1iR"
                )
              }
            >
              Inyoni Yami Leh
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick(
                  "https://youtu.be/hwZNL7QVJjE?si=e4N47bBgAJBZACZn"
                )
              }
            >
              Stand By Me
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick(
                  "https://youtu.be/Ym2NgOcv2Sk?si=L8sumn6V1r6yiOHL"
                )
              }
            >
              {" "}
              Call Out
            </a>
          </li>
        </ul>
      </div>
      <div className=" border-2 border-gray-600 w-200 h-100 justify-self-center flex -mt-290 sm:-70">
        {songUrl && (
          <ReactPlayer
            url={songUrl}
            playing={playing}
            controls={true} 
            width="100%" 
            height="100%"
            volume={1} 
            loop={true} 
            config={{
              youtube: {
                playerVars: {
                  autoplay: 1, 
                  controls: 0, 
                  modestbranding: 1, 
                  mute: 0, 
                  start: 0, 
                },
              },
            }}
          />
        )}
      </div>
    </>
  );
}
