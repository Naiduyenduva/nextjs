import axios from "axios";

async function getblogs () {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data
}
export default async function Build () {
    const blogs = await getblogs();
    return (
        <div className="grid grid-cols-3 gap-5 m-5">
            {
                blogs.map((item:any,index:number)=> (
                        <div className="bg-white text-black w-96 h-fit border border-black p-5">
                            <h1 className="font-semibold">{item.title}</h1>
                            <h1 className="text-gray-700">{item.body}</h1>
                        </div>
                ))
            }
        </div>
    )
}