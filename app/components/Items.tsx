import React from "react";
import Item from "./Item";

function Items({ items }: { items: any }) {
  const itemsList = items.map((item: any) => {
    return <Item key={item.id} item={item} />;
  });
  return (
    <div className="w-full mb-32 grid text-center grid-cols-2 lg:mb-0 lg:grid-cols-4 lg:text-left">
      {itemsList}
    </div>
  );
}

export default Items;
