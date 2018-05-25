import React from "react";
import DefaultLayout from "../ui/src/containers/DefaultLayout";
import HomePageComponent from "./home/HomePage";
import NonGHUserProfileComponent from "./user/nonghUserProfile";
import LoginComponent from "./stateless/login";
import URLShortenerComponent from "./urlShortener";
import NGHDemoPageComponent from "./deployment/UsePrebuiltProject/nghDemoPage";
import RegisterNonGHPageComponent from "./deployment/UsePrebuiltProject/registerPage";
import ShareProfile from "./user/userShareProfile";

const routes = [
  { path: '/home', name: 'Dashboard', component: HomePageComponent },
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/u/:username/:user_id', name: 'user', component: ShareProfile },
  { path: '/p/:shorturl', exact: true, name: 'short', component: URLShortenerComponent },
  { path: '/ngh/user/register', exact: true, name: 'register', component: RegisterNonGHPageComponent },
  { path: '/login*', name: 'login', component: LoginComponent },
  { path: '/ngh/user', component:NonGHUserProfileComponent },





];

export default routes;