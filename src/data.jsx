const card = (
  <div
    className="w-flex justify-center"
    onClick={() => alert("M Series Clicked")}
  >
    <div className="rounded-lg shadow-lg bg-white max-w-sm">
      <a href="#!">
        <img
          className="rounded-t-lg"
          src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
          alt=""
        />
      </a>
      <div className="p-6">
        <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
        <p className="text-gray-700 text-base mb-4">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button
          type="button"
          className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Button
        </button>
      </div>
    </div>
  </div>
);

export const options = {
  id: "1",
  label: "Phones",
  // component: (
  //   <div className="w-full h-full rounded-lg border-2 border-lime-400 shadow-lg">
  //     Phones
  //   </div>
  // ),
  options: [
    {
      id: "1",
      label: "Samsung",
      options: [
        {
          id: "1",
          label: "S Series",
          options: [
            { id: "1", label: "S22" },
            { id: "2", label: "S22 Pro" },
          ],
        },
        {
          id: "2",
          label: "A Series",
          options: [
            { id: "1", label: "A52" },
            { id: "2", label: "A53" },
            { id: "3", label: "A32" },
          ],
        },
        {
          id: "3",
          label: "M Series",
          // component: card,
          options: [
            { id: "1", label: "M51" },
            { id: "2", label: "M31" },
            { id: "3", label: "M12" },
            { id: "4", label: "M21" },
          ],
        },
      ],
    },
    {
      id: "2",
      label: "Apple",
      // component: (
      //   <button
      //     type="button"
      //     className="w-full inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
      //     onClick={() => alert("Apple")}
      //   >
      //     Apple
      //   </button>
      // ),
      options: [
        {
          id: "1",
          label: "iPhone 13",
          options: [
            { id: "1", label: "iPhone 13" },
            { id: "2", label: "iPhone 13 Pro" },
            { id: "3", label: "iPhone 13 Pro Max" },
            { id: "4", label: "iPhone 13 Mini" },
          ],
        },
        {
          id: "2",
          label: "iPhone 14",
          options: [
            { id: "1", label: "iPhone 14" },
            { id: "2", label: "iPhone 14 Pro" },
            { id: "3", label: "iPhone 14 Pro Max" },
          ],
        },
      ],
    },
    {
      id: "3",
      label: "Xiaomi",
      options: [
        {
          id: "1",
          label: "Redmi Note Series",
          options: [
            { id: "1", label: "Note 10 S" },
            { id: "2", label: "Note 10" },
            { id: "3", label: "Note 10 Pro" },
            { id: "4", label: "Note 10 Pro Max" },
          ],
        },
        {
          id: "2",
          label: "Xiaomi Note Series",
          options: [
            { id: "1", label: "Note 9" },
            { id: "2", label: "Note 10" },
            { id: "3", label: "Note 11" },
          ],
        },
      ],
    },
  ],
};
