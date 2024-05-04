// 2-8: Asynchronous Typescript
// promise

// simulate
const createPromise1 = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "something";
    if (data) {
      resolve(data);
    } else {
      reject("failed to load data");
    }
  });
};

type Something = {
  something: string;
};

const createPromise2 = (): Promise<Something> => {
  return new Promise<Something>((resolve, reject) => {
    const data: Something = {
      something: "something",
    };
    if (data) {
      resolve(data);
    } else {
      reject("failed to load data");
    }
  });
};

// calling create promise function
const showData = async () => {
  const data = await createPromise2();
  // console.log(data);
  return data;
};

showData();

// api call to json placeholder
type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const getTodo = async (): Promise<Todo> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  return data;
};

getTodo().then((data) => console.log(data));
