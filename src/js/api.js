export async function getPosts () {
    try {
        const res =  await fetch(`http://localhost:3000/posts`)
        const data =  await res.json()
        return data

    } catch (error) {
        console.log(e);
    }
}