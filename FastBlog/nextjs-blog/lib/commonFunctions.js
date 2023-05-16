export function openInNewTab(url) {
  window.open(url, "_blank");
}

export function callNumber(phoneNumber) {
  window.open("tel:" + phoneNumber);
}

export function downloadFile(path) {
  window.open(path, "_blank", "download");
}

export function convertHyphenatedString(string) {
  const convertedString = string
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return convertedString;
}