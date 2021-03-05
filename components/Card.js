//kita akan buat sebuah component Card
//dengan JS

//funtional
const Card = (id, title, body, img) => {
  return `
    <div class="card" id="${id}">

        <span class="material-icons" id="create" > create </span>
        <span class="material-icons" id="delete" > delete </span>

        <h3 class="card_title">${title}</h3>
        <img src="${img}" class="card_img" />
        <p class="card_body">
            ${body}
        </p>
    </div>
    `;
};

export default Card;
