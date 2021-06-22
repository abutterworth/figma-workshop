import React from "react"
import { Alert } from "@edx/paragon";

import "../assets/index.scss";
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <Alert variant="success">Welcome!</Alert>
    </div>
  );
}
