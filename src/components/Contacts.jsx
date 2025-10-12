import React from "react"
import Button from "./Button";

export default function Contacts({ props }) {
  const contacts = [
    {
      name: "WhatsApp",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="1.5em"
          height="1.5em"
          {...props}
        >
          <g fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12 4a8 8 0 0 0-6.895 12.06l.569.718l-.697 2.359l2.32-.648l.379.243A8 8 0 1 0 12 4M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382l1.426-4.829l-.006-.007l-.033-.055A9.96 9.96 0 0 1 2 12"
              clipRule="evenodd"
            ></path>
            <path d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1 1 0 0 0-.34-.075c-.196 0-.362.098-.49.291c-.146.217-.587.732-.723.886c-.018.02-.042.045-.057.045c-.013 0-.239-.093-.307-.123c-1.564-.68-2.751-2.313-2.914-2.589c-.023-.04-.024-.057-.024-.057c.005-.021.058-.074.085-.101c.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711c-.158-.377-.366-.552-.655-.552c-.027 0 0 0-.112.005c-.137.005-.883.104-1.213.311c-.35.22-.94.924-.94 2.16c0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537c1.412.564 2.081.63 2.461.63c.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276c.192-.534.243-1.117.115-1.329c-.088-.144-.239-.216-.43-.308"></path>
          </g>
        </svg>
      ),
      link: "https://wa.me/6285156144986",
      cn: "text-green-500 border-green-500 hover:bg-green-500 hover:text-white ",
    },
    {
      name: "Instagram",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="1.5em"
          height="1.5em"
          {...props}
        >
          <path
            fill="currentColor"
            d="M16 12a4 4 0 1 0-1.172 2.829A3.84 3.84 0 0 0 16 12.06l-.001-.063zm2.16 0a6.135 6.135 0 1 1-1.797-4.359a5.92 5.92 0 0 1 1.798 4.256l-.001.109zm1.687-6.406v.002a1.44 1.44 0 1 1-.422-1.018c.256.251.415.601.415.988v.029v-.001zm-7.84-3.44l-1.195-.008q-1.086-.008-1.649 0t-1.508.047c-.585.02-1.14.078-1.683.17l.073-.01c-.425.07-.802.17-1.163.303l.043-.014a4.12 4.12 0 0 0-2.272 2.254l-.01.027a6 6 0 0 0-.284 1.083l-.005.037a12 12 0 0 0-.159 1.589l-.001.021q-.039.946-.047 1.508t0 1.649t.008 1.195t-.008 1.195t0 1.649t.047 1.508c.02.585.078 1.14.17 1.683l-.01-.073c.07.425.17.802.303 1.163l-.014-.043a4.12 4.12 0 0 0 2.254 2.272l.027.01c.318.119.695.219 1.083.284l.037.005c.469.082 1.024.14 1.588.159l.021.001q.946.039 1.508.047t1.649 0l1.188-.024l1.195.008q1.086.008 1.649 0t1.508-.047c.585-.02 1.14-.078 1.683-.17l-.073.01c.425-.07.802-.17 1.163-.303l-.043.014a4.12 4.12 0 0 0 2.272-2.254l.01-.027c.119-.318.219-.695.284-1.083l.005-.037c.082-.469.14-1.024.159-1.588l.001-.021q.039-.946.047-1.508t0-1.649t-.008-1.195t.008-1.195t0-1.649t-.047-1.508c-.02-.585-.078-1.14-.17-1.683l.01.073a6.3 6.3 0 0 0-.303-1.163l.014.043a4.12 4.12 0 0 0-2.254-2.272l-.027-.01a6 6 0 0 0-1.083-.284l-.037-.005a12 12 0 0 0-1.588-.159l-.021-.001q-.946-.039-1.508-.047t-1.649 0zM24 12q0 3.578-.08 4.953a6.64 6.64 0 0 1-6.985 6.968l.016.001q-1.375.08-4.953.08t-4.953-.08a6.64 6.64 0 0 1-6.968-6.985l-.001.016q-.08-1.375-.08-4.953t.08-4.953A6.64 6.64 0 0 1 7.061.079L7.045.078q1.375-.08 4.953-.08t4.953.08a6.64 6.64 0 0 1 6.968 6.985l.001-.016Q24 8.421 24 12"
          ></path>
        </svg>
      ),
      link: "https://instagram.com/rsydagha",
      cn: "border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white",
    },
    {
      name: "Email",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="1.5em"
          height="1.5em"
          {...props}
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </g>
        </svg>
      ),
      link: "https://mail.google.com/mail/u/0/?fs=1&to=rsydmagha@gmail.com&tf=cm",
      cn: "text-[#ea4235] hover:bg-[#ea4235] hover:text-white hover:border-[#ea4235]",
    },
    {
      name: "LinkedIn",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 12"
          width="1.5em"
          height="1.5em"
          {...props}
        >
          <path
            fill="currentColor"
            d="M11 0a1 1 0 0 1 .993.883L12 1v10a1 1 0 0 1-.883.993L11 12H1a1 1 0 0 1-.993-.883L0 11V1A1 1 0 0 1 .883.007L1 0zm0 1H1v10h10zM7.742 4.63c1.502 0 1.78.988 1.78 2.273L9.52 9.52H8.04L8.037 7c-.01-.51-.098-1.065-.769-1.065c-.723 0-.872.53-.888 1.109L6.378 9.52H4.897V4.75h1.422v.65h.02a1.56 1.56 0 0 1 1.403-.771zm-3.776.119V9.52H2.482V4.749zm-.741-2.372a.86.86 0 1 1 0 1.72a.86.86 0 0 1 0-1.72"
          ></path>
        </svg>
      ),
      link: "https://www.linkedin.com/in/rasyidmagha",
      cn: "text-[#1469c7] hover:bg-[#1469c7] hover:text-white hover:border-[#1469c7]",
    },
    {
      name: "GitHub",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 12"
          width="1.5em"
          height="1.5em"
          {...props}
        >
          <path
            fill="currentColor"
            d="M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0m0 .98C3.243.98 1 3.223 1 6a5.02 5.02 0 0 0 3.437 4.77l.045.005c.203.01.279-.129.279-.25l-.007-.854c-1.39.303-1.684-.674-1.684-.674c-.227-.58-.555-.734-.555-.734c-.454-.312.034-.306.034-.306c.365.026.604.288.708.43l.058.088c.446.767 1.17.546 1.455.418c.046-.325.174-.546.317-.672c-1.11-.127-2.277-.558-2.277-2.482c0-.548.195-.996.515-1.348l-.03-.085c-.064-.203-.152-.658.079-1.244l.04-.007c.124-.016.548-.013 1.335.522A4.8 4.8 0 0 1 6 3.408c.425.002.853.058 1.252.17c.955-.65 1.374-.516 1.374-.516c.272.692.1 1.202.05 1.33c.32.35.513.799.513 1.347c0 1.93-1.169 2.354-2.283 2.478c.18.155.34.462.34.93l-.006 1.378c0 .13.085.282.323.245A5.02 5.02 0 0 0 11 6C11 3.223 8.757.98 6 .98"
          ></path>
        </svg>
      ),
      link: "https://github.com/itsagha",
      cn: "dark:text-white text-gray-700 hover:bg-gray-700 hover:text-white",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <p className="text-gray-600 dark:text-gray-300 text-center md:text-left">
        Hit me up by clicking one of these buttons!
      </p>
      <img
        src="sosmed.jpg"
        alt="Social media illustration"
        className="w-full h-60 rounded-xl mb-10 mt-4 object-cover"
      />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {contacts.map((c) => (
          <a
            key={c.name}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 border py-2 px-4 rounded-xl ${c.cn} shadow-lg transform transition-all duration-700 hover:scale-102`}
          >
            {c.svg}
            {/* <span className="text-sm">{c.name}</span> */}
          </a>
        ))}
      </div>
    </div>
  );
}