export default async function si ({params}:any) {
    const postid = (await params).postno
        return (
        <div>
          {postid}
        </div>
    )
}