// EXIF's Orientation is 6
const DEFAULT_IMG =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAABgAAAAAAAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wgARCABAAEADAREAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAcIBAUG/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAACLJsDqEnu52wBUabHSpYG52YAKizfUJP1ztAACvk1OlzngAAxzIAAAAAAAAAAAAAAAP//EACQQAAICAQMCBwAAAAAAAAAAAAIEAQUGAAMgMUEQESIjUFNx/9oACAEBAAE/APHD8OZyJyPp1Q48nQpDsrBHn3Llh+Is5G+EQHs9y1R0i1GgC6wdOs8sQw1vI3R9Exsdy1RUStEgC6wfs8sKwBm9YDe3xkF9VNQrTpgurtwIjzTS2UFh2VwgQGPgP//EABQRAQAAAAAAAAAAAAAAAAAAAGD/2gAIAQIBAT8AAf/EABYRAAMAAAAAAAAAAAAAAAAAABFAUP/aAAgBAwEBPwBgyP/Z";

async function base64ToImage(base64) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = base64;
  });
}

export default async function () {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  const img = await base64ToImage(DEFAULT_IMG);

  canvas.width = img.width;
  canvas.height = img.height;

  context.drawImage(img, 0, 0);
  const [r, g, b] = context.getImageData(0, 0, 1, 1).data;

  return r + g + b >= 600;
}
