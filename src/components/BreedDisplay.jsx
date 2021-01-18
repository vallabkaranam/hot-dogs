import React, { useState, useEffect } from "react";

export default function BreedDisplay(props) {
  const [loadMore, setLoadMore] = useState(true);

  const [pics, setPics] = useState([]);

  //console.log("this is props", props.breed);

  //cdm

  /*  useEffect(() => {
    //setPics([]);
    //console.log("working!");
    const url = getUrl(props.breed);
    getData(url, loadMore);
  }, []);
 */
  useEffect(() => {
    //setPics([]);
    const url = getUrl(props.breed);
    getData(url, loadMore);
    setLoadMore(false);
  }, [props.breed]);

  //// added
  /* useEffect(() => {
    const url = getUrl(props.breed);
    getData(url, loadMore);
    setLoadMore(false);
  }, [loadMore]);

  useEffect(() => {
    const list = document.getElementById("list");
    console.log(list);
    if (props.scrollable) {
      // list has fixed height
      list.addEventListener("scroll", (e) => {
        const el = e.target;
        if (el.scrollTop + el.clientHeight === el.scrollHeight) {
          setLoadMore(true);
        }
      });
    } else {
      // list has auto height
      window.addEventListener("scroll", () => {
        if (
          window.scrollY + window.innerHeight ===
          list.clientHeight + list.offsetTop
        ) {
          setLoadMore(true);
        }
      });
    }
  }, []); */

  /* useEffect(() => {
    const list = document.getElementById("list");
    console.log(list);

    if (list.clientHeight <= window.innerHeight && list.clientHeight) {
      setLoadMore(true);
    }
  }, [pics]);
 */
  const getData = (url, load) => {
    fetch(url)
      .then((res) => {
        return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
      })
      .then((res) => {
        //console.log("res", res);
        if (load) {
          setPics([...pics, ...res.message]);
        } else {
          setPics([...res.message]);
        }

        //console.log(res.message);
        //return res.message;
      });
  };

  const getUrl = (breed) => {
    if (breed === "All breeds") {
      return "https://dog.ceo/api/breeds/image/random/10";
    }
    return "https://dog.ceo/api/breed/" + breed + "/images/random/10";
  };

  /* const onScroll = (load, breed) => {
    if (load) {
      const url = getUrl(breed);
      getData(url);
    }
  }; */

  if (pics.length === 0) {
    return (
      <img
        src="https://media.giphy.com/media/3o6gaRoRoR01FU29KE/giphy.gif"
        alt="FETCHING your data"
      />
    );
  }

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
