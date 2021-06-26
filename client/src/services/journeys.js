import axios from "axios";

const journeyService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/journeylog`,
  // baseURL: `http://localhost:5005/api/auth`,
});

export function getJourneylogs() {
  return journeyService
    .get("/")
    .then((response) => response)
    .catch((err) => err);
}

export function createJourneylogs(newJourneylog) {
  return journeyService
    .post("/", newJourneylog)
    .then((response) => response)
    .catch((err) => err);
}

const logServices = {
  getJourneylogs,
  createJourneylogs,
};
export default logServices;
