import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SGetPostBySlug } from "../services/AppService";
import { IPost } from "../interfaces/common";

function BlogPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<IPost | null>(null);
  useEffect(() => {
    if (slug) {
      SGetPostBySlug(slug).then((res) => {
        if (res.status) {
          setPost(res.data.post);
        }
      });
    }
  }, [slug]);
  return <div className="w-full px-5 xl:px-0 xl:w-content m-auto py-8 flex flex-col-reverse md:flex-row  gap-16">
  {loading ? (
    <div className="w-20">
      <DefaultSke />
    </div>
  ) : (
    <div className=" md:w-20">
      <div className="border-b py-2">
        <Link
          to={"/account/@" + blog?.user.username}
          className="font-bold text-lg"
        >
          {blog?.user.first_name + " " + blog?.user.last_name}
        </Link>
        <div className="text-gray-500 mt-1 text-sm">{blog?.user.bio}</div>
      </div>
      <div className="py-5 px-3  text-gray-500 flex gap-16">
        <div
          onClick={handleLove}
          className={
            "flex gap-2 items-center hover:text-gray-600 cursor-pointer " +
            (isLove && " text-red-500 hover:text-red-600")
          }
        >
          <FaHeart className=" text-xl" />
          <div>{loveCount}</div>
        </div>
        {/* ModalComment({ isOpenComment, setIsOpenComment, step }: props) */}
        {/* {isOpenComment &&blog && <ModalComment  isOpenComment={isOpenComment} setIsOpenComment={setIsOpenComment} step={blog} type='blog'/>} */}
        {/* <div onClick={()=>setIsOpenComment(true)} className="flex gap-2 items-center hover:text-gray-600 cursor-pointer">
          <IoChatbubbles className=" text-xl" />
          <div>{blog?.comment_count}</div>
        </div> */}
      </div>
    </div>
  )}
  {loading ? (
    <div className="flex-1">
      {/* <DefaultSke /> */}
    </div>
  ) : (
    <div className="flex-1">
      <h2 className="font-bold text-3xl">{blog?.title}</h2>
      <div className="py-8 flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <div className="w-[50px] h-[50px]">
            <img
              className="rounded-full w-full h-full object-cover"
            //   src={blog?.user.avatar_url}
              alt=""
            />
          </div>
          <div>
            <Link
            //   to={"/account/@" + blog?.user.username}
              className="font-bold"
            >
              {/* {blog?.user.first_name + " " + blog?.user.last_name} */}
            </Link>
            <div className="text-gray-500">
              {/* {FormMartDateAgo(blog?.updated_at ?? "")} */}
            </div>
          </div>
        </div>
        {/* {blog && <SaveShare blog={blog} />} */}
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: blog?.content ?? "" }}></div> */}

      <div className="my-8 flex gap-2">
        {/* {blog &&
          blog.tags.length > 0 &&
          blog.tags.map((item) => {
            return (
              <Link
                to={"/blogs/tag/" + item.tag.slug}
                key={item.id}
                className="bg-gray-100 px-5 py-2 w-fit text-sm rounded-sm"
              >
                {item.tag.name}
              </Link>
            );
          })} */}
      </div>
      <div>
        <div className="font-bold text-lg">{t('blog.t20')}</div>
        <div className=" p-4 flex flex-col gap-2">
          {/* {blogAuthhor.length > 0 &&
            blogAuthhor.map((item) => {
              return (
                <Link
                  to={"/blog/" + item.slug}
                  key={item.id}
                  className="flex items-center gap-2 border-b border-transparent
           hover:border-primary-500 cursor-pointer hover:border-b
           w-fit hover:text-primary-500
           "
                >
                  <div className="w-[8px] h-[8px] bg-gray-500 rounded-full"></div>
                  {item.title}
                </Link>
              );
            })} */}
        </div>
      </div>
    </div>
  )}
</div>
}

export default BlogPage;
