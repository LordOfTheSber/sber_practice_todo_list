import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../entities/task/taskSlice';
import authReducer from '../entities/auth/authSlice';
import categoryReducer from '../entities/category/categorySlice';

export default configureStore({
  reducer: {
    task: taskReducer,
    auth: authReducer,
    category: categoryReducer
  }
});
