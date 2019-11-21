export const getSize = (size = "normal") => {
  if(size === 'small') return `
      height: 35px;
      padding: 0 15px;
      font-size: 12px;
      width: max-content;
    `;

  if(size === 'normal') return `
      height: 40px;
      padding: 0 15px;
      width: max-content;
    `;

  if(size === 'medium') return `
      height: 45px;
      padding: 0 15px;
      font-size: 18px;
      width: max-content;
    `;

  if(size === 'large') return `
      height: 50px;
      padding: 0 20px;
      font-size: 20px;
      width: max-content;
    `;
};

export const getShape = (shape = "rect") => {
  if(shape === 'circle') return `
    border-radius: 50%;
    height: 50px;
    width: 50px;
  `;

  if(shape === 'rect') return `
    border-radius: 4px;
  `;

  if(shape === 'round') return `
    border-radius: 123px;
  `;
};

export const getType = (type = "normal", loading=true) => {
  if(type === "primary") return `
    color: #fff;
    background-color: #807be3;
    border: solid 1px #807be3;
    &:hover {
      background-color: #6d67de;
      border: solid 1px #6d67de;
    }
  `;

  if(type === "normal") return `
    color: #807be3;
    background-color: #fff;
    border: solid 1px #807be3;
  `;

  if(type === "link") return `
    border: none;
    color: #807be3;
    background-color: transparent;
  `;

  if (type === "ghost") return `
    color: #807be3;
    background-color: #fff;
    border: solid 1px #807be3;
    transition: 100ms background 200ms ease-out, 100ms color 200ms ease-out;

    &:hover {
      color: #fff;
      background-color: #807be3;
      border: solid 1px #807be3;
    }
  `;
}
