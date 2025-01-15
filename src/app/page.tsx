import Image from "next/image";
import Featured from "./components/featured/page";
import Category from "./components/category/page";
import CardList from "./components/cardlist/page";
import Menu from "./components/menu/page";

export default function Home() {
  return (
    <div>
      <Featured/>
      <Category/>
      <div className="flex max-sm:w-full max-md:w-full md:w-[90%] max-sm:gap-0  md:gap-10 max-md:gap-16">
        <CardList/>
        <Menu/>
      </div>
    </div>
  );
}
