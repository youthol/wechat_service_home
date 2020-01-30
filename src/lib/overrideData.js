export const overrideForInfoChange = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  return {
    sdut_id: data.sdut_id,
    college: data.college.id,
    class: data.class,
    dormitory: data.dormitory.id,
    room: data.room,
    password_jwc: data.password_jwc,
    password_dt: data.password_dt
  };
};

export const overrideForUser = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  return {
    name: data.name,
    sdut_id: data.sdut_id,
    college: data.college.name,
    class: data.class,
    dormitory: data.dormitory.description,
    room: data.room
  };
};