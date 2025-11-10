import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";


function PublicLayout({ children }: { children: ReactNode }) {
    return (
        <header>
            <nav>
                <ul className=" flex justify-center gap-4 ">
                    <li>
                        <Button>
                            <Link href={"/"}>Home</Link>
                        </Button>
                    </li>
                </ul>
                <div>
                    {children}
                </div>
            </nav>
        </header>
    );
}

export default PublicLayout;