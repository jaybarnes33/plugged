"use client";

import Sidebar from "@/components/sections/Dashboard/Sidebar";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Dashboard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [store, setStore] = useState(
    !pathname.includes("store") ? false : true
  );

  return (
    <>
      <div className="min-h-full">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <Sidebar />

        <div className="lg:pl-64 ml-2">
          {store ? (
            children
          ) : (
            <div className="capitalize underline text-red-500">
              No store created,{" "}
              <Link href="/dashboard/store">create one now</Link>{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
