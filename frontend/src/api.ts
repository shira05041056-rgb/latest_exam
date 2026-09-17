
export async function login (email:string, password:string) {
    const data = await fetch("http://localhost:3003/my-app/login",{
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify({email: email, password: password})
    })
    return await data.json()
}