/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import Link from "next/link";


const HomePage = async () => {

    const res = await fetch("https://abc.madrasatuahmad.com/api/courses", {
        cache: "no-cache"
    })

    const data = await res.json();

    const courses = data.data.data

    console.log(courses);



    return (
        <div className=" max-w-4xl mx-auto">

            {courses.map((course: any) => (
                <div key={course.id}>
                    <h1 className=" text-2xl "> ({course.id}) {course.title} </h1>
                    <Button asChild>
                        <Link href={`/${course.id}`}>
                            Read more
                        </Link>
                    </Button>

                </div>

            ))}


        </div>
    );
};

export default HomePage;