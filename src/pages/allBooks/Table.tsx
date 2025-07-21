import { BsThreeDotsVertical } from "react-icons/bs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { PiBooksDuotone } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { useGetAllBOoksQuery } from "@/redux/api/baseApi";
import type { IBook } from "@/Types";
import Loading from "@/components/loader/Loading";

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
  const { data, isLoading } = useGetAllBOoksQuery(null);
  const books: IBook[] = data?.data || [];

  return (
    <div className=" px-8 mb-4 w-full flex items-center flex-col gap-5 justify-center">
      {isLoading ? (
        <Loading></Loading>
      ) : (
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
                  <th className="p-3 text-left  font-medium ">No</th>
                  <th className="p-3 text-left  font-medium ">Title</th>
                  <th className="p-3 text-left  font-medium ">Author</th>
                  <th className="p-3 text-left  font-medium ">Genre</th>
                  <th className="p-3 text-left  font-medium ">ISBN</th>
                  <th className="p-3 text-left  font-medium ">Copies</th>
                  <th className="p-3 text-left  font-medium ">Availability</th>
                  <th className="p-3 text-left  font-medium ">Actions</th>
                </tr>
              </thead>
              <tbody>
                {books.map((item, index) => (
                  <tr key={item?._id} className="border-t hover:bg-secondary">
                    {/* Title, Author, Genre, ISBN, Copies, Availability, and Actions. */}
                    <td className="p-3 relative">{index + 1}</td>
                    <td className="p-3 relative">{item.title}</td>
                    <td className="p-3 relative">{item.author}</td>
                    <td className="p-3 relative">{item.genre}</td>
                    <td className="p-3 relative">{item.isbn}</td>
                    <td className="p-3 relative">
                      {item.copies > 0 ? (
                        item.copies
                      ) : (
                        <span className="px-2 rounded-full bg-secondary text-secondary-foreground">
                          N/A
                        </span>
                      )}
                    </td>
                    <td className="p-3 relative">
                      {item?.available ? (
                        <span className="px-2 rounded-full bg-accent text-accent-foreground">
                          Available
                        </span>
                      ) : (
                        <span className="px-2 rounded-full bg-secondary text-secondary-foreground">
                          N/A
                        </span>
                      )}
                    </td>
                    <td className="p-3 relative">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <BsThreeDotsVertical className="action-btn rounded-full hover:text-accent-foreground hover:bg-accent h-7 w-7 p-2  cursor-pointer" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="start">
                          <DropdownMenuLabel>Manage Book</DropdownMenuLabel>
                          <DropdownMenuGroup>
                            <DropdownMenuItem>
                              <PiBooksDuotone className="hover:text-accent-foreground" />
                              Borrow
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <MdOutlineEdit className="hover:text-accent-foreground" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <MdDeleteOutline className="hover:text-accent-foreground" />
                              Delete
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <IoEyeOutline className="hover:text-accent-foreground" />
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
      )}
    </div>
  );
};

export default Table;
