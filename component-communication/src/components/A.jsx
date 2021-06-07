import { useState } from "react";

// export default function A() {
//   const [value, setValue] = useState("아직 안바뀜");
//   return (
//     <div>
//       <B value={value} />
//       <button onClick={click}>E 의 값을 바꾸기</button>
//     </div>
//   );

//   function click() {
//     setValue("E 의 값을 변경");
//   }
// }

// function B({ value }) {
//   return (
//     <div>
//       <p>여긴 B</p>
//       <C value={value} />
//     </div>
//   );
// }

// function C({ value }) {
//   return (
//     <div>
//       <p>여긴 C</p>
//       <D value={value} />
//     </div>
//   );
// }

// function D({ value }) {
//   return (
//     <div>
//       <p>여긴 D</p>
//       <E value={value} />
//     </div>
//   );
// }

// function E({ value }) {
//   return (
//     <div>
//       <p>여긴 E</p>
//       <h3>{value}</h3>
//     </div>
//   );
// }

export default function A() {
  const [value, setValue] = useState("아직 안바뀜");
  return (
    <div>
      <p>{value}</p>
      <B setValue={setValue} />
    </div>
  );
}

function B({ setValue }) {
  return (
    <div>
      <p>여긴 B</p>
      <C setValue={setValue} />
    </div>
  );
}

function C({ setValue }) {
  return (
    <div>
      <p>여긴 C</p>
      <D setValue={setValue} />
    </div>
  );
}

function D({ setValue }) {
  return (
    <div>
      <p>여긴 D</p>
      <E setValue={setValue} />
    </div>
  );
}

function E({ setValue }) {
  return (
    <div>
      <p>여긴 E</p>
      <button onClick={click}>클릭</button>
    </div>
  );

  function click() {
    setValue("A 의 값을 변경");
  }
}
