import axios from "axios";

async function getblogs () {
    const response = await axios.get("http://localhost:3000/api/v1");
    return response.data
}
export default async function Build () {
    const blogs = await getblogs();
    return (
        <div>
            {
                JSON.stringify(blogs)
            }
        </div>
    )
}