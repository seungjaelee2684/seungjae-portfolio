export const koreaTime = (data: any) => {
  const utcDate = new Date(data);
  const koreaDate = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000);
  const year = koreaDate.getFullYear();
  const month = String(koreaDate.getMonth() + 1).padStart(2, "0");
  const day = String(koreaDate.getDate()).padStart(2, "0");
  const hours = String(koreaDate.getHours()).padStart(2, "0");
  const minutes = String(koreaDate.getMinutes()).padStart(2, "0");
  const seconds = String(koreaDate.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} / ${hours}:${minutes}:${seconds}`;
};