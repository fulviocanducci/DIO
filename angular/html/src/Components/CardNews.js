class CardNews extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  build() {
    const componentRoot = document.createElement("div");
    componentRoot.className = "card";

    const cardLeft = document.createElement("div");
    cardLeft.className = "card__left";

    const span = document.createElement("span");
    span.textContent = this.getAttribute("name");

    const a = document.createElement("a");
    a.textContent = this.getAttribute("linktext");

    const p = document.createElement("p");
    p.textContent = this.getAttribute("text");

    cardLeft.appendChild(span);
    cardLeft.appendChild(a);
    cardLeft.appendChild(p);

    const cardRight = document.createElement("div");
    cardRight.className = "card__rigth";
    const img = document.createElement("img");
    img.src = "assets/images/darth-vader-main-small.jpg";
    img.alt = "darth-vader-main";
    cardRight.appendChild(img);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);
    return componentRoot;
  }
  styles() {
    const style = document.createElement("style");
    style.textContent = `
    * {
            margin: 0;
            padding: 0;
            box-sizing: 0;
            font-family: 'Segoe UI', sans-serif;
        }

        .container {
            padding: 5px;
        }

        .card {
            width: 65%;
            border: 0px solid gray;
            display: flex;
            flex-direction: row;
            -webkit-box-shadow: 10px 10px 18px -13px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 18px -13px rgba(0,0,0,0.75);
            box-shadow: 10px 10px 18px -13px rgba(0,0,0,0.75);
            justify-content: space-between; 
            margin-top: 10px;   
        }

        .card__left, .card__rigth {
            border: 0px solid blue;
        }

        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }

        .card__right  {
            border: 0;
        }

        .card__right > img {
            border: 0;
            padding: 3px;
            margin-bottom: 0;
        }

        .card__left > a {
            margin-top: 15px;
            font-size: 25px;    
            text-decoration: none;
            font-weight: 400;
            color:black;
        }

        .card__left > p {
            color: gray;
        }

        .card__left > span {
            font-weight: 400;
        }
    `;
    return style;
  }
}

customElements.define("card-news", CardNews);
