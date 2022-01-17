import axios from "axios";

const getData = async () => {
  return new Promise((res, rej) => {
    res(2);
  });
  // return axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
};
console.log("Hola");

pagar().then((x) => {
  crearEnvio();
  enviarMail();
});
// await pagar();
// await crearEnvio();
// enviarMail();

pagar().then(() => {
  crearEnvio().then(() => {
    enviarMail();
  });
});

pagar()
  .then(() => crearEnvio())
  .then(() => enviarMail());

// const response = await getData();
// console.log(response);
// getData()
//   .then((data) => {
//     console.log(data.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Promesa finalizada por si o no");
//   });
console.log("Chau");
