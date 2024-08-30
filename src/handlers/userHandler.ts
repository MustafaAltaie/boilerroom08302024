import { Request, Response } from 'express';
import { CreateUserDto } from '../dtos/CreateUserDto';
import { UserQueryParams } from '../types/UserQueryParams';
import { User } from '../types/User';

// Handler for creating a user
export const createUser = (req: Request, res: Response) => {
  const userData: CreateUserDto = req.body;
  // Logic for creating a user
  res.status(201).json({ message: 'User created successfully' });
};

// Handler for getting users with optional query parameter
export const getUsers = (req: Request<{}, {}, {}, UserQueryParams>, res: Response) => {
  const { active } = req.query;
  // Logic for retrieving users based on "active" parameter
  res.json({ users: [] });
};

// Handler for getting a single user
export const getUser = (req: Request, res: Response<User>) => {
  const user: User = { id: 1, name: 'John Doe', email: 'john@example.com' };
  res.json(user);
};