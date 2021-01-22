import React, { useState, useEffect } from "react";
import _ from "lodash";
import Display from "./Display";

export default function DataProcessor(props) {
  const [isBottom, setIsBottom] = useState(false);
  const [pics, setPics] = useState([]);
  const [favPics, setFavPics] = useState([]);

  //cdm
  useEffect(() => {
    window.addEventListener("scroll", _.throttle(handleScroll, 300));
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //when breed changes
  useEffect(() => {
    const url = getUrl(props.breed, 20);
    getData(url, isBottom);
  }, [props.breed]);

  const handleScroll = () => {
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

    if (scrollTop + h + 50 >= scrollHeight) {
      setIsBottom(true);
    }
  };

  useEffect(() => {
    if (isBottom) {
      const url = getUrl(props.breed, 10);
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

  /* The API will return x number of pictures for each call and there is no
   guarantee that it will not send repeats on different calls. So, I am using 
   the Set data type to ensure there are no duplicates showing. */

  const getUrl = (breed, nums) => {
    if (breed === "All breeds") {
      return `https://dog.ceo/api/breeds/image/random/${nums}`;
    }
    return `https://dog.ceo/api/breed/${breed}/images/random/${nums}`;
  };

  return (
    <Display
      pics={pics}
      setPics={setPics}
      favPics={favPics}
      setFavPics={setFavPics}
    />
  );
}
