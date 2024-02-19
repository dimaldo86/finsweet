export async function getPosts () {
    try {
        const res =  await fetch(`http://localhost:3000/posts`)
        const data =  await res.json()
        return data

    } catch (error) {
        console.log(e);
    }
}
export async function getPostsId (id) {
    try {
        const res =  await fetch(`http://localhost:3000/posts/${id}`,
        {
            headers: {
              Prefer: `code=200, example=Example ${id}`,
            },
          })
        const data =  await res.json()
        return data

    } catch (error) {
        console.log(e);
    }
}