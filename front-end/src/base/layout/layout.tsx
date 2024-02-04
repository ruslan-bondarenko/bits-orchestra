"use client";

import React, { FC, PropsWithChildren } from "react";

import { Header } from "@/widgets";

import { store } from "../store";
import { Provider } from "react-redux";

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>
    <Header />
    {children}
  </Provider>
);

export default Layout;
