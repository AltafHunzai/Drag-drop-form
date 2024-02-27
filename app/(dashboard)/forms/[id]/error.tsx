"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect } from "react";

function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className='flex w-full h-full flex-col items-center justify-center'>
        <h2 className=" text-destructive text-4xl">Something Went Wrong!</h2>
        <Button asChild className="mt-4">
            <Link href={'/'}>Go Back To Home</Link>
        </Button>
    </div>
  );
}

export default ErrorPage;
