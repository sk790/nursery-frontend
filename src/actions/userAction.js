import { login } from "../redux/userSlicer";

export const registerUser = async (user) => {
  try {
    const res = await fetch(`http://localhost:4444/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    login(data);
    return data;
  } catch (error) {}
};

export const loginUser = async (user) => {
  try {
    const { email, password } = user;
    const res = await fetch(`http://localhost:4444/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    return data;
  } catch (error) {}
};
