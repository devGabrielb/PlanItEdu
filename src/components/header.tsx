import Icon from "./icon";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <>
      <div className="w-full border-b border-gray-200 p-4">
        <div className="container mx-auto py-2 flex flex-row items-center justify-between">
          <h1 className="text-xl font-black">PlanItEdu</h1>
          <div className="flex flex-row gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <Icon name="chevron-down" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
