import Link from "next/link";

const SingleBlog = ({ blog }) => {
  return (
    <div className="m-4 border border-blue-800 p-4">
      <h2 className="text-2xl font-semibold">{blog.blogTitle}</h2>
      <p className="py-2">{blog.description}</p>
      <div className="flex gap-5 items-center">
        <p>Posted Date: {blog.postDate}</p>
        <Link href={`/blogs/${blog.id}`}>
          <button className="py-2 px-4 bg-black text-white rounded">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleBlog;
