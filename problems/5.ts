// 5. Create a generic interface called Repository that represents a generic data repository. It should have methods like getAll, getById, create, update, and delete. Define the types for the methods and create a class that implements this interface.

interface Repository<T> {
  getAll(): T[];
  getById(id: number): T | null;
  create(item: T): void;
  updateById(item: T): void;
  deleteById(id: number): void;
}

interface User {
  id: number;
  name: string;
  email: string;
}

class GenericRepository<T extends User> implements Repository<T> {
  constructor(private users: T[] = []) {}

  // get all
  getAll(): T[] {
    return this.users;
  }

  // get by id
  getById(id: number): T | null {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      return null;
    }
    return user;
  }

  // create
  create(item: T): void {
    this.users.push(item);
  }

  // update by id
  updateById(item: T): void {
    const index = this.users.findIndex(
      (existingItem: T) => existingItem.id === item.id
    );
    if (index !== -1) {
      this.users[index] = item;
    } else {
      this.users.push(item);
    }
  }

  // delete by id
  deleteById(id: number): void {
    const index = this.users.findIndex((item: T) => item.id === id);

    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}

const repositories = new GenericRepository();

repositories.create({
  id: 111,
  name: "noyonalways",
  email: "noyonrahman2003@gmail.com",
});
repositories.create({
  id: 222,
  name: "codermdshakil",
  email: "mdshakil@gmail.com",
});

repositories.updateById({
  name: "test-name",
  email: "test-email@gmail.com",
  id: 33,
});

repositories.deleteById(111);

const getUserById = repositories.getById(222);
const getAllUsers = repositories.getAll();
console.log("user-by-id:", getUserById);
console.log("all-users:", getAllUsers);
