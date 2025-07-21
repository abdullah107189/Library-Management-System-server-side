import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { PiBooksDuotone } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";

const Table = () => {
  const initialData = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Editor",
      status: "Active",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 5,
      name: "Charlie Wilson",
      email: "charlie@example.com",
      role: "Admin",
      status: "Inactive",
    },
  ];
  return (
    <div className="overflow-y-auto px-8 mb-4 w-full flex items-center flex-col gap-5 justify-center">
      <div className="w-full mx-auto p-4">
        <div className="mb-3">
          <input
            placeholder="Search..."
            className="max-w-sm bg-input py-2.5 px-4 border  rounded-md outline-none "
          />
        </div>

        <div className="w-full rounded-md border overflow-x-auto">
          <table className="w-full text-sm ">
            <thead className="bg-card">
              <tr>
                {Object.keys(initialData[0]).map(
                  (key) =>
                    key !== "id" && (
                      <th
                        key={key}
                        className="p-3 text-left font-medium cursor-pointer"
                      >
                        <div className="flex items-center gap-[5px]">
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                          <HiOutlineArrowsUpDown className="p-[5px] rounded-md text-[1.6rem]" />
                        </div>
                      </th>
                    )
                )}
                <th className="p-3 text-left  font-medium ">Actions</th>
              </tr>
            </thead>
            <tbody>
              {initialData.map((item) => (
                <tr key={item.id} className="border-t hover:bg-secondary">
                  {Object.entries(item).map(
                    ([key, value]) =>
                      key !== "id" && (
                        <td key={key} className="px-3">
                          {value}
                        </td>
                      )
                  )}
                  <td className="p-3 relative">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <BsThreeDotsVertical className="action-btn rounded-full hover:text-accent-foreground hover:bg-accent h-7 w-7 p-2  cursor-pointer" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56" align="start">
                        <DropdownMenuLabel>Manage Book</DropdownMenuLabel>
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <PiBooksDuotone />
                            Borrow
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MdOutlineEdit />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MdDeleteOutline />
                            Delete
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <IoEyeOutline />
                            View Details
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {!initialData?.length && (
            <p className="text-[0.9rem] py-6 text-center w-full">
              No data found!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
