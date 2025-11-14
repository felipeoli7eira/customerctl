import { APP_UI_ICON_DEFAULT_SIZE, APP_UI_APP_NAME } from "@/const";
import Link from "next/link";
import { FiLogOut, FiUser } from "react-icons/fi";

export default function AppHeaderComponent() {
    return (
        <header className="shadow-sm bg-base-200">
            <div className="container p-2 mx-auto flex items-center justify-between">
                <nav>
                    <Link href={"/"} className="text-2xl font-bold">{APP_UI_APP_NAME}</Link>
                </nav>

                <div className="space-x-1">
                    <Link href={"/app"} className="btn btn-primary space-x-1">
                        <FiUser size={APP_UI_ICON_DEFAULT_SIZE} />
                        <span>Entrar</span>
                    </Link>
                    <button className="btn btn-secondary">
                        <FiLogOut size={APP_UI_ICON_DEFAULT_SIZE} />
                        <span>Sair</span>
                    </button>
                </div>
            </div>
        </header>
    )
}
