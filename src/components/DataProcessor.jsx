import React, { useState, useEffect } from "react";
import _ from "lodash";
import "../App.css";
import Display from "./Display";

export default function DataProcessor(props) {
  const [isBottom, setIsBottom] = useState(false);
  const [pics, setPics] = useState([]);
  const [favPics, setFavPics] = useState([]);

  //cdm
  useEffect(() => {
    //const url = getUrl(props.breed, 20);
    //getData(url, isBottom);
    window.addEventListener("scroll", _.throttle(handleScroll, 300));
    //handleScroll);
    //console.log("event listener");
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //when breed changes
  useEffect(() => {
    //window.scrollTo(0, 0);
    const url = getUrl(props.breed, 20);
    getData(url, isBottom);
  }, [props.breed]);

  const handleScroll = () => {
    /* console.log("entered handleScroll"); */
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
    //console.log(h);
    if (scrollTop + h + 50 >= scrollHeight) {
      setIsBottom(true);
      /* console.log("at the bottom of the page");
      console.log(isBottom); */
    }
  };

  useEffect(() => {
    if (isBottom) {
      const url = getUrl(props.breed, 10);
      getData(url, isBottom);
    }
  }, [isBottom]);

  const getData = (url, isBottom) => {
    //console.log("started get data");
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

  const getUrl = (breed, nums) => {
    if (breed === "All breeds") {
      return "https://dog.ceo/api/breeds/image/random/" + nums;
    }
    return "https://dog.ceo/api/breed/" + breed + "/images/random/" + nums;
  };
  //else {

  /*  if (pics.length === 10) {
    return (
      <div>
        <ul id="list">
          {pics.map((img, i) => (
            <li
              style={{
                backgroundImage: `url(${img})`,
                border: "solid #4ce6cc",
              }}
              key={i}
              onClick={console.log(img)}
            />
          ))}
        </ul>
        <p className="fonts" style={{ color: "Grey" }}>
          If you love what you see, scroll down to fetch some more!
        </p>
      </div>
    );
  
  } */
  return (
    <React.Fragment>
      <Display
        pics={pics}
        setPics={setPics}
        favPics={favPics}
        setFavPics={setFavPics}
      />
    </React.Fragment>
  );

  //}
}
