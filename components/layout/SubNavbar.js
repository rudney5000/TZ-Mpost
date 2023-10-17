import { BsArrowRight } from "react-icons/bs";

export default function SubNavbar() {
  return (
    <div class=" flex w-full h-full sm:h-full sm:w-full  items-center bg-purple-900 text-white py-4">
      <a href="/">Rules</a>
      <a href="/">Leaderboard</a>
      <div class="flex  ml-auto">
        <a href="/" class="flex-row">
          <span class="flex flex-row items-center">
            <BsArrowRight class="mr-3" />
            login
          </span>
        </a>
      </div>
    </div>
  );
}
