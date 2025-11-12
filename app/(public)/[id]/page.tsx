
async function AboutPage({ params }: { params: { id: string } }) {

    const { id } = await params

    const res = await fetch(`https://abc.madrasatuahmad.com/api/courses/${id}`)

    const data = await res.json();

    const singleCourse = data.data;

    return (
        <div> {singleCourse?.title}</div>
    );
}

export default AboutPage;