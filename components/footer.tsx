import Link from "next/link"; 

export function Footer() {
  return (
    <footer className="FontSHK_Dzeragir rounded-tl-[80px] bottom-0 py-10 text-center text-base bg-[#DBDEEA]   text-[#000000]">
      
      <Link href="https://www.instagram.com/webinvite.am/">
        <p className="mt-2 text-xl">
          Պատրաստվել է <span className="underline">WebInvite</span> -ի  կողմից 
        </p>
      </Link>
    </footer>
  );
}
