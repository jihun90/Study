fetch("https://www.naver.com/")
  .then((response) => response.json())
  .then((post) => post.url)
  .then((url) => {console.log(url); return fetch("https://dict.naver.com/");})
  .then((url) => {console.log("sucess - " + url); return response.json();})
  .catch((error) => console.log("error:", error));