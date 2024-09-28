import { axiosInstance } from "./axiosInstance";

export const carouselBest = async () => {
  const res = await axiosInstance.get("/books/popular");
  return res;
}
export const carouselGenre = async (selectGenre) => {
  const res = await axiosInstance.get(`/books/categorys?categoryType=${selectGenre}`);
  return res
}
export const recordCalender = async () => {
  const res = await axiosInstance.get("/calender/combined-cnt");
  return res
}
export const recordHistory = async () => {
  const res = await axiosInstance.get("/records/main");
  return res
}