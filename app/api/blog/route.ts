import { connectToDB } from "@/lib/db"
import { Blog } from "@/model/blog.model";



export async function GET() {
    await connectToDB();
    const blogs = await Blog.find();

    return Response.json({
        status: "Success",
        message: "Blogs retrieve successfully",
        data: blogs
    })
}


export async function POST(request: Request) {
    await connectToDB();
    // const blogs = await Blog.find();

    const blog = await Blog.insertOne(await request.json());

    return Response.json({
        status: "Success",
        message: "Blog created successfully",
        data: blog
    })
}