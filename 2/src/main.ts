fetch("https://reqres.in/api/users")
  .then((response) => response.json())
  .then((data) => {
    const users = data.data;
    console.log("Users:", users);
    localStorage.setItem("users", JSON.stringify(users));
  })
  .catch((error) => console.error("Error fetching users:", error));

const getItem = JSON.stringify(localStorage.getItem("users"));

class User {
  constructor(
    public id: number,
    public first_name: string,
    public last_name: string,
    public email: string,
    public avatar?: string
  ) {}

  save() {
    const newUser: User = new User(
      this.id,
      this.email,
      this.first_name,
      this.last_name,
      this.avatar
    );
    const UserData: User[] = JSON.parse(localStorage.getItem("Users") || "");
    UserData.push(newUser);
    localStorage.setItem("Users", JSON.stringify(UserData));
    console.log(UserData);
  }

  static findAll() {
    const UserData: User[] = JSON.parse(localStorage.getItem("Users") || "");
    console.log(UserData);
  }

  static findById(id: number) {
    const UserData: User[] = JSON.parse(localStorage.getItem("Users") || "");
    const found: User | undefined = UserData.find((item) => item.id === id);
    if (found === undefined) {
      console.log([]);
    }
    if (!!found) {
      console.log(found);
    }
  }

  static remove(id: number) {
    const UserData: User[] = JSON.parse(localStorage.getItem("Users") || "");
    const chosen: User | undefined = UserData.find((item) => item.id === id);
    if (chosen === undefined) {
      console.log("not found user ID");
    }
    if (!!chosen) {
      const deletedUserOfArray: User[] = UserData.filter(
        (item) => item.id !== id
      );
      localStorage.setItem("Users", JSON.stringify(deletedUserOfArray));
      console.log(chosen);
    }
  }

  static update(id: number, updateData: User) {
    const UserData: User[] = JSON.parse(localStorage.getItem("Users") || "");
    const find: User | undefined = UserData.find((item) => item.id === id);
    if (find === undefined) {
      console.log("not found user ID");
    }
    if (!!find) {
      const deletedUserOfArray: User[] = UserData.filter(
        (item) => item.id !== id
      );
      deletedUserOfArray.push(updateData);
      localStorage.setItem("Users", JSON.stringify(deletedUserOfArray));
      console.log(updateData);
    }
  }
}
