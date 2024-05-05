import type { OrderCreateResult, OrderCreateParams, OrderPreResult } from '@/types/order'
import { http } from '@/utils/http'

export const getMemberOrderAPI = () => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre',
  })
}

export const getMemberOrderNowAPI = (data: { skuId: string; count: string; addresId?: string }) => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data,
  })
}

export const postMemberOrderAPI = (data: OrderCreateParams) => {
  return http<OrderCreateResult>({
    method: 'POST',
    url: '/member/order',
    data,
  })
}
