import { API_KEY } from "./env.js";

// Common URL
const tmdbCommand = "https://api.themoviedb.org/3";

// const url = `${tmdbCommand}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`;
// ? 뒤에 api_key=${API_KEY}& 추가하기

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//  변수로 만들어 사용하기
const nowPlaying = async () => {
  const url = `${tmdbCommand}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  // fetch함수의 특징 : 외부에서 데이터를 찾아올때 사용하는 전역함수 (비동기적 작동)
  // await 예약어는 await를 감싸안고 있는 부모가 async 가지고 있어야함 세트
  // const data = await response.json(); // results 의 값만 (배열)데이터만 찾아오기
  const { results } = await response.json(); // 구조분해할당
  // console.log("nowPlaying :", results);
  return results;
};

const upComing = async () => {
  const url = `${tmdbCommand}/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  const { results } = await response.json();
  // console.log("upComing :", results);

  return results;
};

const topRated = async () => {
  const url = `${tmdbCommand}/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  const { results } = await response.json();
  // console.log("topRated :", results);

  return results;
};

// nowPlaying();
// upComing();
// topRated();

// 동시에 여러개의 데이터를 찾아와서 한꺼번에 보여줄려고 할 때
// Promise : 약속 / 데이터를 다 가져올때까지 기다렸다가 한번에 출력

/* Promise DBs */
const getMovies = async () => {
  const [nowPlayingMoving, upComingMoving, topRatedMoving] = await Promise.all([
    nowPlaying(),
    upComing(),
    topRated(),
  ]);
  // console.log("nowPlayingMoving : ", nowPlayingMoving);

  /* main Slider*/
  const mainSlider = document.querySelector(".mainSlider");
  // 메인슬라이더에 영역 만들어서 이미지 넣어주기
  nowPlayingMoving.forEach((movie) => {
    // console.log(movie); // backdrop_path (movie객체 안에 이미지 담고 있는 함수)
    const figure = document.createElement("figure");
    figure.innerHTML = `<img src = "https://image.tmdb.org/t/p/original/${movie.backdrop_path}">`; // figure안에 이미지
    mainSlider.appendChild(figure);
  });

  /* Fade Effect*/
  const figures = document.querySelectorAll("figure");
  // console.log(figures);

  // 0번쨰 인덱스 정의
  let currentIndex = 0;

  const showNextSlider = () => {
    figures[currentIndex].classList.remove("active");
    // 무한 슬라이드 0에서 시작
    currentIndex = (currentIndex + 1) % figures.length;
    // 다음 인덱스 값에 가상클래스 active 주기
    figures[currentIndex].classList.add("active");
  };
  // 반복 슬라이드 무한
  figures[currentIndex].classList.add("active");

  setInterval(showNextSlider, 3000);
};

getMovies(); // DBs 출력

// /* Fade Effect */
// const navlis = document.querySelectorAll(".gnb > ul > li");
// const submenus = document.querySelectorAll(".submenu");
// const menuBg = document.querySelector(".menu-bg");

// navlis.forEach((navli) => {
//   navli.addEventListener("mouseover", () => {
//     submenus.forEach((submenu) => {
//       submenu.style.opacity = "1";
//       submenu.style.maxheight = "300px";
//       menuBg.style.opacity = "1";
//       menuBg.style.maxheight = "300px";
//     });
//   });

//   // navli.addEventListener("mouseout", () => {
//   //   submenus.forEach((submenu) => {
//   //     submenu.style.opacity = "0";
//   //     submenu.style.maxheight = "0";
//   //     menuBg.style.opacity = "0";
//   //     menuBg.style.maxheight = "0";
//   //   });
//   // });
// });
// GNB li Event
const naviLis = document.querySelectorAll(".gnb > ul > li");
const submenus = document.querySelectorAll(".submenu");
const menuBg = document.querySelector(".menu-bg");

naviLis.forEach((naviLi) => {
  naviLi.addEventListener("mouseover", () => {
    submenus.forEach((submenu) => {
      submenu.style.opacity = "1";
      submenu.style.maxHeight = "300px";
      menuBg.style.opacity = "1";
      menuBg.style.maxHeight = "320px";
    });
  });

  naviLi.addEventListener("mouseout", () => {
    submenus.forEach((submenu) => {
      submenu.style.opacity = "0";
      submenu.style.maxHeight = "0";
      menuBg.style.opacity = "0";
      menuBg.style.maxHeight = "0";
    });
  });
});

/* Accordion Event */
const contents = document.querySelectorAll(".accordion .content");
contents[0].style.display = "block";

const titles = document.querySelectorAll(".title");
titles.forEach((title) => {
  title.addEventListener("click", () => {
    contents.forEach((item) => {
      item.style.display = "none";
    });
    titles.forEach((otherTitle) => {
      if (otherTitle !== title) {
        otherTitle.classList.remove("active");
      }
    });
    const content = title.nextElementSibling;
    if (title.classList.contains("active")) {
      title.classList.remove("active");
      content.style.display = "none";
    } else {
      title.classList.add("active");
      content.style.display = "block";
    }
  });
});

/* search modal */
const searchBtn = document.querySelector(".search-box .fa-magnifying-glass");
const modalSearch = document.querySelector(".modal-search");
const closeBtn = document.querySelector(".close");
console.log(closeBtn);

searchBtn.addEventListener("click", () => {
  modalSearch.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modalSearch.classList.remove("active");
});
