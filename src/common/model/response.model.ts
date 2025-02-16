import { ApiProperty } from '@nestjs/swagger';
import { RESPONSE_SUCCESS_CODE, RESPONSE_SUCCESS_MSG } from 'src/constants';

/**
 * Response Operation
 */
export class ResOp<T = any> {
  @ApiProperty({
    description: '状态码',
    type: Number,
    default: RESPONSE_SUCCESS_CODE,
  })
  code: number;

  @ApiProperty({
    description: '消息',
    type: String,
    default: RESPONSE_SUCCESS_MSG,
  })
  message: string;

  @ApiProperty({
    description: '数据',
    type: Object,
  })
  data: T;

  constructor(code: number, data: T, message: string = RESPONSE_SUCCESS_MSG) {
    this.code = code;
    this.data = data;
    this.message = message;
  }

  static success<T>(data: T, message: string = RESPONSE_SUCCESS_MSG) {
    return new ResOp(RESPONSE_SUCCESS_CODE, data, message);
  }

  static error(code: number, message: string = RESPONSE_SUCCESS_MSG) {
    return new ResOp(code, {}, message);
  }
}
