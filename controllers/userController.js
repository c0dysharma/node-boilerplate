import catchAsync from '../utils/catchAsync.js';

import User from '../models/userModel.js';

export const getAllUser = catchAsync(async (req, res, next) => {
  return res.status(200).json({ status: 'success', data: 'All Users' });
});

export const updateuser = catchAsync(async (req, res, next) => {
  return res.status(200).json({ status: 'success', data: 'Updated User' });
});
