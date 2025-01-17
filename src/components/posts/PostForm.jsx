/** @jsx createVNode */
import { createVNode } from "../../lib";
import { globalStore } from "../../stores";

export const PostForm = () => {
  const handleSubmit = () => {
    const contentElement = document.getElementById("post-content");
    const content = contentElement.value.trim();

    if (!content) return;

    const { posts, currentUser } = globalStore.getState();

    const newPost = {
      id: posts.length + 1,
      author: currentUser.username,
      content,
      time: Date.now(),
      likeUsers: [],
    };

    globalStore.setState({
      posts: [newPost, ...posts],
    });

    contentElement.value = "";
  };

  return (
    <div className="mb-4 bg-white rounded-lg shadow p-4">
      <textarea
        id="post-content"
        placeholder="무슨 생각을 하고 계신가요?"
        className="w-full p-2 border rounded"
      />
      <button
        id="post-submit"
        onClick={handleSubmit}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
      >
        게시
      </button>
    </div>
  );
};
