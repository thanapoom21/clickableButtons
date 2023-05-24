import React, { useState } from 'react'

interface SidebarProps {
  children: JSX.Element[];
}

function Sidebar({ children }: SidebarProps) {
  const [filter, setFilter] = useState("");

  return (
    <div className="md:relative fixed animate__animated -left-full md:left-0 dark:bg-gray-700 bg-white shadow-md h-full md:block md:pt-0 md:w-4/12 top-0 w-9/12 z-20" id="sidebar">
      <div className="md:fixed h-full md:h-4/6 md:pt-0 md:w-4/12 overflow-y-auto pb-3 pl-5 pt-5">
        <div className="flex pb-5">
          <input
            name="search" type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search..."
            className="border focus:border-red-600 focus:outline-none pl-3 dark:bg-gray-700 dark:text-white"></input>
          <button
            onClick={() => { setFilter("") }}
            className={!filter ? "disabled-btn ml-2 sbtn fill-color-btn up-fill red-btn xsmall-btn text-justify font-bold" : "ml-2 sbtn fill-color-btn up-fill red-btn xsmall-btn text-justify font-bold"} > Reset </button>
        </div>
        <>
          {console.log(children)}
        </>
        <div>
          {children.filter((child: { props: { text: string; }; }) => {
            return child.props.text.toLowerCase().includes(filter.toLowerCase());
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
