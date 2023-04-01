type UserType = {
  id: number;
  name: string;
  email: string;
  password: string;
};

type UserFormType = {
  name: string;
  email: string;
  password: string;
};

type UserErrorFormType = UserFormType & {
  message: string;
};

type AuthType = {
  isAuthenticated: boolean;
};
