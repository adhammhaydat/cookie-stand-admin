import Head from "next/head";
import CustomHead from "../components/Head";
import CookieStandAdmin from "../components/CookieStandAdmin";
import Login from "../components/Login";
import { useAuth } from "../contexts/auth";

export default function Home() {
  const { user, login, logout } = useAuth();
  console.log("--->", user);
  return (
    <div className="flex flex-col min-h-screen bg-green-100">

      {user ? (<CookieStandAdmin /> ): (<Login login={login}  /> )}
    </div>
  );
}
