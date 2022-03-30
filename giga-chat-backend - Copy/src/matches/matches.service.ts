import { Inject, Injectable } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { Model } from 'mongoose';
import { Match } from './entities/match.entity';

@Injectable()
export class MatchesService {
  constructor(
    @Inject('MATCH_MODEL') private readonly matchModel: Model<Match>,
  ) {}

  async create(createMatchDto: CreateMatchDto) {
    console.log(createMatchDto);
    const match = await this.matchModel
      .findOne<Match>({
        userUUID: createMatchDto.userMatchSenderUUID,
      })
      .exec();
    console.log('Break');
    console.log(match);
    if (match) {
      if (createMatchDto.isAMatch) {
        await this.matchModel
          .findOneAndUpdate(
            {
              userUUID: createMatchDto.userMatchSenderUUID,
            },
            {
              $push: { likes: createMatchDto.userMatchReceiverUUID },
            },
          )
          .exec();
      } else {
        await this.matchModel
          .findOneAndUpdate(
            {
              userUUID: createMatchDto.userMatchSenderUUID,
            },
            {
              $push: { disLikes: createMatchDto.userMatchReceiverUUID },
            },
          )
          .exec();
      }
    } else {
      const likes = [];
      const dislike = [];
      if (createMatchDto.isAMatch) {
        likes.push(createMatchDto.userMatchReceiverUUID);
      } else {
        dislike.push(createMatchDto.userMatchReceiverUUID);
      }
      await this.matchModel.create({
        userUUID: createMatchDto.userMatchSenderUUID,
        likes: likes,
        disLikes: dislike,
      });
    }
  }

  findAll() {
    return `This action returns all matches`;
  }

  findOne(id: number) {
    return `This action returns a #${id} match`;
  }

  update(id: number, updateMatchDto: UpdateMatchDto) {
    return `This action updates a #${id} match`;
  }

  remove(id: number) {
    return `This action removes a #${id} match`;
  }
}
