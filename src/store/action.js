import { getCollegeInfo } from "./components/getCode/getCollegeInfo";
import { getDormitoryInfo } from "./components/getCode/getDormitoryInfo";

export const getCollege = () => ({
  type: 'GET_COLLEGE',
  action: getCollegeInfo
});

export const getDormitory = () => ({
  type: 'GET_DORMITORY',
  action: getDormitoryInfo
})