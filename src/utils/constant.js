export const UserRolesEnum = {
  ADMIN: 'admin',
  PROJECT_ADMIN: 'project_admin',
  MEMBER: 'member',
  GUEST: 'guest',
};

export const AvailableUserRoles = Object.values(UserRolesEnum);

export const TaskStatusEnum = {
    TODO: "todo",
    IN_PROGRESS: "in_progress",
    DONE: "done",
    BLOCKED: "blocked",
};

export const AvailableTaskStatus = Object.values(TaskStatusEnum);