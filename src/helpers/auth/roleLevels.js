export const roleLevels = {
  user: 1,
  moderator: 2,
  admin: 3
};

export function getRoleLevel(role) {
  return roleLevels[role] || 0;
}

export function isRequiredRoleLevel(role, requiredRole) {
  return getRoleLevel(role) >= getRoleLevel(requiredRole);
}
