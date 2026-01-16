import { User } from "../models/user.models.js";
import { Project } from "../models/project.models.js";
import { Task } from "../models/task.models.js";
import { Subtask } from "../models/subtask.models.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";
import mongoose from "mongoose";
import { AvailableUserRole, UserRolesEnum } from "../utils/constants.js";

const getTasks = asyncHandler(async (req, res) => {
  //hi
});
const createTask = asyncHandler(async (req, res) => {
  //hi
});
const getTaskById = asyncHandler(async (req, res) => {
  //hi
});
const updateTask = asyncHandler(async (req, res) => {
  //hi
});
const deleteTask = asyncHandler(async (req, res) => {
  //hi
});
const createSubTask = asyncHandler(async (req, res) => {
  //hi
});
const updateSubTask = asyncHandler(async (req, res) => {
  //hi
});
const deleteSubTask = asyncHandler(async (req, res) => {
  //hi
});

export {
  getTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
  createSubTask,
  updateSubTask,
  deleteSubTask,
};
