import Link from "@components/Link"
import ThemeSwitch from "@components/ThemeSwitch"

export default function Home() {
  return (
    <div className="m-8 relative space-y-4">
      <div className="items-center justify-between text-center text-5xl font-extrabold">
        VAHRYISK.TECH
      </div>
      <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8 text-black dark:text-black">
        <p>I am a website developer, bot, graphic designer, and nft artist. I learned to make a website from 2019 I learned to use javascript in 2019, at that time I only used it to create a discord bot using libbrary discord.js. <Link href="http://vahryiskandar.my.id/" className="bg-cust1 p-1">Main Website</Link></p>
      </div>
    </div>
  )
}
