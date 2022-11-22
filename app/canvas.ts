export const canvas=  document.createElement('canvas');
export const ctx = canvas.getContext('2d');
document.querySelector('#app').appendChild(canvas);
let width = 500;
let height = 500;
canvas.width = width;
canvas.height = height;
canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;
canvas.style.border = '2px solid blue';
canvas.style.display = 'block';
canvas.style.margin = 'auto';

