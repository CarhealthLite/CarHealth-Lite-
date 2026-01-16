const BASE_URL =
  process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

const postRequest = async (endpoint, data) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const loginUser = async (email, password) => {
  const res = await postRequest('/auth/login', { email, password });
  if (res.success && res.token) sessionStorage.setItem('token', res.token); 
  return res;
};

export const signupUser = async (name, email, password) => {
  const res = await postRequest('/auth/signup', { name, email, password });
  if (res.success && res.token) sessionStorage.setItem('token', res.token); 
  return res;
};

export const getDiagnostic = async (data) =>
  postRequest('/api/diagnostic', data);
