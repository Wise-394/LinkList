import type { NextFunction, Request, Response } from 'express';
import { ImageFiles } from '../../types/imageFiles';
import { uploadPhoto } from '../../service/ImageService/uploadPhoto';
import { updateUserInfo } from '../../service/userServices/updateUserInfo';
import { User } from '../../../../types/types';

export async function updateUserInfoController(
  req: Request & { files?: ImageFiles },
  res: Response,
  next: NextFunction,
) {
  try {
    const supabase = req.supabase!;
    const data = JSON.parse(req.body.data);
    const profileImage = req.files?.profileImage;
    const coverImage = req.files?.coverImage;

    if (!profileImage?.[0] || !coverImage?.[0]) {
      return res.status(400).json({ error: 'image is required' });
    }

    const profileURL = await uploadPhoto({
      supabase,
      file: profileImage?.[0],
      userID: req.user?.id!,
      type: 'profile-photo',
    });

    const coverURL = await uploadPhoto({
      supabase,
      file: coverImage?.[0],
      userID: req.user?.id!,
      type: 'cover-photo',
    });

    const user: User = {
      id: req.user!.id,
      bio: data.bio,
      name: data.name,
      username: data.username,
      coverImageUrl: coverURL,
      profileImageUrl: profileURL,
    };
    const newUserInfo = await updateUserInfo(supabase, user);
    return res.json({ ...newUserInfo });
  } catch (error) {
    next(error);
  }
}
