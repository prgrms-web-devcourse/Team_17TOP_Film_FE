const getDistanceFromLatLonInKm = (lat1: number, lng1: number, lat2: number, lng2: number) => {
  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };

  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
};

export const isOpenableDistance = (
  postLat: number,
  postLon: number,
  userLat: number,
  userLon: number,
) => {
  const distance = getDistanceFromLatLonInKm(postLat, postLon, userLat, userLon);
  console.log(distance);
  if (1 < distance) {
    return true;
  }
};
