export async function getPosts (pageNumber) {
    try {
        const res =  await fetch(`http://localhost:3000/posts?page=${pageNumber}`)
        const data =  await res.json()
        return data

    } catch (error) {
        console.log(e);
    }
}