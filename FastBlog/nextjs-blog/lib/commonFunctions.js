export default function openInNewTab(url) {
  window.open(url, "_blank");
}

export function callNumber(phoneNumber) {
  window.open("tel:" + phoneNumber);
}
