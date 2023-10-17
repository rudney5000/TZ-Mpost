import { GiPadlock } from "react-icons/gi";
import YesNoButton from "./YesNoButton";

export default function CreateMarketChild({ input }) {
  return (
    <div class="flex flex-row pr-20 pl-20 mt-10">
      <div class="flex items-center pr-20 pl-20 mt-10">
        {input}
        <YesNoButton />
      </div>

      <button class="flex flex-col bg-purple-900 hover:bg-purple-800 text-white rounded-t-xl rounded-b-xl ml-auto mr-10 py-10 px-10 items-center ">
        <GiPadlock />
        <h1>Boost</h1>
      </button>
    </div>
  );
}
