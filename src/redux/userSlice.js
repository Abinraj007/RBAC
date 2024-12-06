// src/redux/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Sample user data
const initialState = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin',  // Admin role
    status: 'Active',
    tasks: {
      ongoing: ['Manage Admin Permissions', 'Review User Reports'],
      completed: ['User Feedback Analysis', 'Security Patch Deployment']
    }
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'user',  // Regular user role
    status: 'Active',
    tasks: {
      ongoing: ['Complete Task A', 'Update Profile'],
      completed: ['Task B', 'Task C']
    }
  },
  {
    id: 3,
    name: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    role: 'user',  // Administrator role
    status: 'Active',
    tasks: {
      ongoing: ['Set Up New Users', 'Review System Settings'],
      completed: ['System Maintenance', 'Create Reports']
    }
  },
  {
    id: 4,
    name: 'Michael Lee',
    email: 'michael.lee@example.com',
    role: 'user',  // Regular user role
    status: 'Active',
    tasks: {
      ongoing: ['Task D', 'Attend Meeting'],
      completed: ['Task E', 'Submit Report']
    }
  },
  {
    id: 5,
    name: 'Sarah Williams',
    email: 'sarah.williams@example.com',
    role: 'admin',  // Admin role
    status: 'Inactive',
    tasks: {
      ongoing: ['Monitor System Logs', 'Approve Requests'],
      completed: ['System Upgrade', 'Patch Deployment']
    }
  },
  {
    id: 6,
    name: 'David Brown',
    email: 'david.brown@example.com',
    role: 'user',  // Regular user role
    status: 'Active',
    tasks: {
      ongoing: ['Complete Task X', 'Review Feedback'],
      completed: ['Submit Feedback', 'Complete Task Y']
    }
  },
  {
    id: 7,
    name: 'Olivia Martinez',
    email: 'olivia.martinez@example.com',
    role: 'user',  // Administrator role
    status: 'Active',
    tasks: {
      ongoing: ['Manage Settings', 'Monitor System Health'],
      completed: ['Report Generation', 'User Permission Updates']
    }
  },
  {
    id: 8,
    name: 'James Taylor',
    email: 'james.taylor@example.com',
    role: 'user',  // Regular user role
    status: 'Inactive',
    tasks: {
      ongoing: ['Task Z', 'Attend Workshop'],
      completed: ['Complete Task A', 'Complete Task B']
    }
  },
  {
    id: 9,
    name: 'Sophia Garcia',
    email: 'sophia.garcia@example.com',
    role: 'admin',  // Admin role
    status: 'Active',
    tasks: {
      ongoing: ['Audit Logs', 'Approve User Requests'],
      completed: ['Security Checkup', 'System Backup']
    }
  },
  {
    id: 10,
    name: 'Lucas Rodriguez',
    email: 'lucas.rodriguez@example.com',
    role: 'user',  // Administrator role
    status: 'Active',
    tasks: {
      ongoing: ['Deploy System Updates', 'Conduct System Audit'],
      completed: ['Backup Data', 'Update User Roles']
    }
  }
];

// Create a slice of the store
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      return action.payload;  // Set users data
    },
    updateUserStatus: (state, action) => {
      const { id, status } = action.payload;
      const user = state.find(user => user.id === id);
      if (user) {
        user.status = status;
      }
    }
  }
});

// Export actions
export const { setUsers, updateUserStatus } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
