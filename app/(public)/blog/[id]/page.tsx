


async function BlogDetails({ params }: { params: string }) {

    const { id } = await params;

    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    console.log(await res.json());

    console.log(id);


    return (
        <div> Blog Details page</div>
    );
}

export default BlogDetails;
