import axios from "axios";

const API_BASE =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";

export async function pingBackend() {
  const res = await axios.get(`${API_BASE}/api/ping`);
  return res.data;
}
// example: GET /api/inspections
// export async function getInspections(params) {
//   const res = await axios.get(`${API_BASE}/api/inspections`, { params });
//   return res.data;
// }

// // example: POST /api/predict
// export async function predictFailure(payload) {
//   const res = await axios.post(`${API_BASE}/api/predict`, payload);
//   return res.data;
// }

// // example: GET /api/metrics
// export async function getMetrics() {
//   const res = await axios.get(`${API_BASE}/api/metrics`);
//   return res.data;
// }