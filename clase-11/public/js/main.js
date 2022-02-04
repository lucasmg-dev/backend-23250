const socket = io.connect();

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  socket.emit("new_message", {
    author: document.querySelector("input[name=author]").value,
    message: document.querySelector("input[name=message]").value,
  });

  console.log("Enviar mensaje al WS");
});

const render = (data) => {
  const html = data
    .map((elem) => {
      return `<div>
     <strong>${elem.author}</strong>
     <em>${elem.message}</em> 
    </div>`;
    })
    .join("");
  document.querySelector("#messages").innerHTML = html;
};

const renderhbs = (messages) => {
  const tplHtml = document.querySelector("#messages-tpl").innerHTML;
  const template = Handlebars.compile(tplHtml);
  document.querySelector("#messages").innerHTML = template({ messages });
};

socket.on("messages_received", (data) => {
  renderhbs(data);
});
