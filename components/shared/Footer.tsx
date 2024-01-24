import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex p-5 flex-col gap-4 text-center sm:flex-row">
        <Link href="/">
          <Image 
            src="/assets/logo/logo.svg"
            alt="logo"
            width={100}
            height={30}
          />
        </Link>
        <p>2024 Mimi. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer