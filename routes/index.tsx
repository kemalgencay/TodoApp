import Todos from "../islands/todos.tsx";
export default function Home() {
  return (
    <>
    <div className="bg-gray-200">
      <div className="mt-10 px-5 rounded bg-white mx-auto flex w-screen flex-col justify-center py-12">
        <div className='mx-auto'>
          <h1 className='text-2xl mb-5 text-center font-bold'>Fresh Todo Lists</h1>
          <img src='logo.svg' alt="Image-1" className="mx-auto" />
          <div>
            <Todos/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
