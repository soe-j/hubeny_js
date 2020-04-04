// WGS84（GPS）
const R_X = 6378137.000000; // 赤道半径
const R_Y = 6356752.314245; // 極半径

const rad = deg => {
  return deg * Math.PI / 180.0;
};

const distance = (lat1, lng1, lat2, lng2) => {
  lat1 = rad(lat1);
  lat2 = rad(lat2);
  lng1 = rad(lng1);
  lng2 = rad(lng2);

  const a_x = lng1 - lng2;
  const a_y = lat1 - lat2;

  const p = (lat1 + lat2) / 2.0;

  const e = Math.sqrt((R_X ** 2 - R_Y ** 2) / (R_X ** 2));

  const w = Math.sqrt(1 - (e ** 2) * ((Math.sin(p)) ** 2));

  const m = R_X * (1 - e ** 2) / (w ** 3);

  const n = R_X / w;

  const d = (a_y * m) ** 2 + (a_x * n * Math.cos(p)) ** 2;

  return Math.sqrt(d);
}

module.exports = {
  distance
}
