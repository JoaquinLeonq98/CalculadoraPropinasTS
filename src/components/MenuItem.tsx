import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
}

export default function MenuItem({item} : MenuItemProps) {
  return (
    <button className="border border-teal-400 w-full hover:bg-teal-300 p-3 flex justify-between">
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}
