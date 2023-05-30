import { getAllItems } from "@/firebase/firestore";
import React from "react";
import Items from "./Items";

async function RenderItems() {
  const items = await getAllItems();
  return <Items items={items[0]} />;
}

export default RenderItems;
