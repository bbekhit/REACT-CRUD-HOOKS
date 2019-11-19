import React, { useState, useEffect } from "react";

const initialLocationState = {
  latitude: null,
  longitude: null,
  speed: null
};

export const Example = () => {
  const [isOn, setIsOn] = useState(false);
  const [position, setPosition] = useState({
    x: null,
    y: null
  });
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);
  const [{ latitude, longitude, speed }, setLocation] = useState(
    initialLocationState
  );
  let mounted = true;

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  const handleMouseMOve = e => {
    setPosition({
      x: e.pageX,
      y: e.pageY
    });
  };

  const handleOnlineStatus = () => {
    setOnlineStatus(true);
  };

  const handleOfflineStatus = () => {
    setOnlineStatus(false);
  };

  const handleGeolocation = event => {
    if (mounted) {
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed
      });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMOve);
    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOfflineStatus);
    navigator.geolocation.getCurrentPosition(handleGeolocation);
    const watchId = navigator.geolocation.watchPosition(handleGeolocation);

    return () => {
      window.removeEventListener("mousemove");
      window.removeEventListener("online");
      window.removeEventListener("offline");
      navigator.geolocation.clearWatch(watchId);
      mounted = false;
    };
  }, []);
  return (
    <div style={{ margin: "50px" }}>
      <h2>Toggle Light</h2>
      <img
        src={
          isOn
            ? "https://icon.now.sh/highlight/fd0"
            : "https://icon.now.sh/highlight/aaa"
        }
        style={{
          height: "50px",
          width: "50px"
        }}
        alt="Flashlight"
        onClick={toggleLight}
      />
      <h2>Position Detector</h2>
      <p>{`Mouse is at position ${position.x} horixontally and position ${position.y} vertically`}</p>
      <h2>Status Detector</h2>
      <p>{`i am currently ${onlineStatus ? "online" : "offline"}`}</p>
      <h2>Geolocation</h2>
      <p>Latitude is {latitude}</p>
      <p>Longitude is {longitude}</p>
      <p>Your speed is {speed ? speed : "0"}</p>
    </div>
  );
};
