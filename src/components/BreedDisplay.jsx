import React, { useState, useEffect } from "react";

export default function BreedDisplay(props) {
  const [loadMore, setLoadMore] = useState(true);
  console.log("iinit", loadMore);
  //const [currentBreed, setBreed] = useState(props.breed);
  const [url, setUrl] = useState(
    "https://dog.ceo/api/breed/" + props.breed + "/images/random/10"
  );

  console.log("this is props", props.breed);
  console.log("init", loadMore);

  useEffect(() => {
    console.log("1");
    setLoadMore(true);
    console.log("inside", loadMore);
    getData(loadMore);
    setLoadMore(false);
  });

  useEffect(() => {
    console.log("2");
    getData(loadMore);
    setLoadMore(false);
  }, [loadMore]);

  useEffect(() => {
    const list = document.getElementById("list");
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
  }, []);

  useEffect(() => {
    const list = document.getElementById("list");

    if (list.clientHeight <= window.innerHeight && list.clientHeight) {
      setLoadMore(true);
    }
  }, [props.pics]);

  const getData = (load) => {
    console.log("get data");
    console.log(load);

    if (load) {
      console.log(url);
      fetch(url)
        .then((res) => {
          return !res.ok
            ? res.json().then((e) => Promise.reject(e))
            : res.json();
        })
        .then((res) => {
          console.log("res", res);
          props.setPics([...props.pics, ...res.message]);
        });
    }
  };

  return (
    <div>
      <ul id="list">
        {props.pics.map((img, i) => (
          <li style={{ backgroundImage: `url(${img})` }} key={i} />
        ))}
      </ul>
    </div>
  );
}
