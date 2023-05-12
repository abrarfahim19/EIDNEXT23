export function openInNewTab(url) {
  window.open(url, "_blank");
}

export function callNumber(phoneNumber) {
  window.open("tel:" + phoneNumber);
}

export function downloadFile(path) {
  window.open(path, "_blank", "download");
}
