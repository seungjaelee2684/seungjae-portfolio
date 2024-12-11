export const koreaTime = (data: any) => {
  const koreaDate = new Date(data);
  const year = koreaDate.getFullYear();
  const month = String(koreaDate.getMonth() + 1).padStart(2, "0");
  const day = String(koreaDate.getDate()).padStart(2, "0");
  const hours = String(koreaDate.getHours()).padStart(2, "0");
  const minutes = String(koreaDate.getMinutes()).padStart(2, "0");
  const seconds = String(koreaDate.getSeconds()).padStart(2, "0");

  return (
    (data)
      ? `${year}-${month}-${day} | ${hours}:${minutes}:${seconds}`
      : ''
  );  
};

export const koreaDate = (data: any) => {
  const koreaDay = new Date(data);
  const year = koreaDay.getFullYear();
  const month = String(koreaDay.getMonth() + 1).padStart(2, "0");
  const day = String(koreaDay.getDate()).padStart(2, "0");

  return (
    (data)
      ? `${year}-${month}-${day}`
      : ''
  );
};