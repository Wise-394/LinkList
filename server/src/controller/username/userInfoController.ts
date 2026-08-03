import type { NextFunction, Request, Response } from 'express';
import { ImageFiles } from '../../types/imageFiles';
import { uploadPhoto } from '../../service/ImageService/uploadPhoto';
import { updateUserInfo } from '../../service/userServices/updateUserInfo';
import { User, UserInfo } from '../../../../types/types';
import { deleteAllLinkOfUser } from '../../service/linkService/deleteAllLinkOfUser';
import { addLink } from '../../service/linkService/addLink';
import { NewLink } from '../../../../types/types';
import { getUser } from '../../service/userServices/getUser';
import { getLinks } from '../../service/linkService/getLinks';

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

    const user: Omit<User, 'username'> = {
      id: req.user!.id,
      bio: data.bio,
      name: data.name,
      photoUrl: coverURL,
      coverPhotoUrl: profileURL,
    };

    //profile infos
    const newUserInfo = await updateUserInfo(supabase, user);

    //links
    //delete all user previous link to add fresh ones
    console.log('data.links from frontend:', data.links); // debug
    const linkItems: Array<NewLink> = data.links.map((link: NewLink) => ({
      userID: req.user!.id,
      label: link.label,
      url: link.url,
      icon: link.icon,
      order: link.order,
    }));
    console.log('linkItems to insert:', linkItems); // debug

    await deleteAllLinkOfUser(supabase, req.user!.id);
    const newLinkItems = await addLink(supabase, linkItems);

    return res.json({
      userInfo: { ...newUserInfo },
      linkItems: { ...newLinkItems },
    });
  } catch (error) {
    next(error);
  }
}

export async function getUserInfoController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const userID = req.params.userID as string;

    if (!userID) {
      return res.status(400).json({ error: 'empty id' });
    }

    const user = await getUser(req.supabase!, userID);
    if (!user) {
      return res.status(400).json({ error: 'username doesnt exist' });
    }
    const linkItems = await getLinks(req.supabase!, userID);
    const userInfo: UserInfo = { user, linkItems };
    return res.json(userInfo);
  } catch (error) {
    next(error);
  }
}
