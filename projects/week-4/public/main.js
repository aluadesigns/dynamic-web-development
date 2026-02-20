// this is front-end js, so it lives in the public folder
window.onload = () => {
  colorFunc();
};

const colorFunc = async () => {
  // we can use a relative path because we are making the request from the same server
  const response = await fetch("http://45.55.144.149:8000/all-inputs");
  console.log(response);
  const json = await response.json();
  console.log(json);

  let data = json.data;
  for (let d of data) {

    document.body.style.backgroundColor = d.color;

    document.getElementById("update").innerHTML = "last changed by " + d.name + " to " + d.color;

  }
};