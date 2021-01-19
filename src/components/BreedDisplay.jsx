import React, { useState, useEffect } from "react";

export default function BreedDisplay(props) {
  const [isBottom, setIsBottom] = useState(false);
  const [pics, setPics] = useState([]);

  //cdm
  useEffect(() => {
    const url = getUrl(props.breed);
    getData(url, isBottom);
    window.addEventListener("scroll", handleScroll);
    console.log("event listener");
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const url = getUrl(props.breed);
    getData(url, isBottom);
  }, [props.breed]);

  const handleScroll = () => {
    console.log("entered handleScroll");
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    var h =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    console.log(h);
    if (scrollTop + h + 50 >= scrollHeight) {
      setIsBottom(true);
      console.log("at the bottom of the page");
      console.log(isBottom);
    }
  };

  useEffect(() => {
    if (isBottom) {
      const url = getUrl(props.breed);
      getData(url, isBottom);
    }
  }, [isBottom]);

  const getData = (url, isBottom) => {
    fetch(url)
      .then((res) => {
        return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
      })
      .then((res) => {
        if (isBottom) {
          let allPics = [...pics, ...res.message];
          let uniquePics = [...new Set(allPics)];
          setPics([...uniquePics]);
        } else {
          setPics([...res.message]);
        }
      });
    setIsBottom(false);
  };

  const getUrl = (breed) => {
    if (breed === "All breeds") {
      return "https://dog.ceo/api/breeds/image/random/10";
    }
    return "https://dog.ceo/api/breed/" + breed + "/images/random/10";
  };

  if (pics.length === 0) {
    return (
      <img
        src="https://media.giphy.com/media/3o6gaRoRoR01FU29KE/giphy.gif"
        alt="FETCHING your data"
      />
    );
  }

  if (pics.length < 20) {
    return (
      <div>
        <ul id="list">
          {pics.map((img, i) => (
            <li style={{ backgroundImage: `url(${img})` }} key={i} />
          ))}
        </ul>
        <h1 style={{ paddingTop: 150 }}>Swipe up to see more!</h1>
      </div>
    );
  } else {
    return (
      <div>
        <ul id="list">
          {pics.map((img, i) => (
            <li style={{ backgroundImage: `url(${img})` }} key={i} />
          ))}
        </ul>
      </div>
    );
  }
}
