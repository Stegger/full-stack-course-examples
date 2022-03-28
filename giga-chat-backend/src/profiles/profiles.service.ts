import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Model } from 'mongoose';
import { Profile } from './entities/profile.entity';
import { UserLikeProfileDto } from './dto/user-like-profile.dto';
import { Cache } from 'cache-manager';

@Injectable()
export class ProfilesService {
  constructor(
    @Inject('PROFILE_MODEL') private profileModel: Model<Profile>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const createdProfile = new this.profileModel(createProfileDto);
    return createdProfile.save();
  }

  likeProfile(userLikeProfileDto: UserLikeProfileDto) {
    this.cacheManager.set('key', 'value');

    this.cacheManager.get('key').then((value) => console.log(value));
  }

  findAll() {
    return this.profileModel.find().exec();
  }
}
