import HomePage from "../Components/HomePage";
import { auth } from "../config/fire";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  return <HomePage />;
}
