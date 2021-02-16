const url1 = "https://img.freepik.com/free-photo/room-with-concrete-floor-and-smoke-background_9083-2991.jpg?size=626&ext=jpg";
const url2 = "https://i.etsystatic.com/16239593/r/il/ea32ac/1478396954/il_570xN.1478396954_4nt7.jpg";
const url3 = "https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img(11).jpg";

function loadImages(url){
  return new Promise(function(resolve, reject){
    const img = new Image();
    img.width = 400;
    img.src = url;
    document.body.append(img);
    img.addEventListener('load', () => {
      resolve();
    })
  })
}
loadImages(url1)
  .then(() => {
        return loadImages(url2);
      }
  ).then(() => {
    return loadImages(url3);
  }).then(()=> console.log('All images loaded'))