"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";


const HomePage = () => {

    const [count, setCount] = useState(0);

    return (
        <div>

            <Image width={500} height={500} src="/pexels-8.jpg" alt="image" />

            <Button onClick={() => setCount(count + 1)}> {count}</Button>
        </div>
    );
};

export default HomePage;