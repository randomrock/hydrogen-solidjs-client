import { BsImages } from "solid-icons/bs";
import GroupsModal from "../../components/groups/createGroupPost/GroupsModal";
import ImageUpload from "../../components/shared/ImageUpload";
import useCreateGroupPost from "../../hooks/useCreateGroupPost";

export default function CreateGroupPost() {
  const {
    form,
    handleInput,
    handleSubmit,
    addImage,
    removeImage,
    addGroupId,
    removeGroupId,
  } = useCreateGroupPost();
  return (
    <div className="">
      <section className="max-w-md mx-auto bg-white dark:bg-gray-800  px-4 py-4  rounded-md shadow">
        <form onSubmit={[handleSubmit]} className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Group post content</label>
            <textarea
              value={form.fields.content}
              onInput={[handleInput]}
              name="content"
              className="rounded-md dark:bg-gray-700"
              rows={5}
              placeholder="What`s on your mind Harsh ?"
            />
          </div>
          <GroupsModal
            groupId={form.fields.groupId}
            addGroupId={addGroupId}
            removeGroupId={removeGroupId}
          />
          <ImageUpload
            image={form.fields.image}
            addImage={addImage}
            removeImage={removeImage}
            btnClass="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 py-2 rounded-md justify-center"
          >
            <BsImages className="text-green-500 text-2xl" />
            <span>Add image</span>
          </ImageUpload>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-3 bg-blue-500 text-white rounded-md text-lg"
            >
              Create
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}