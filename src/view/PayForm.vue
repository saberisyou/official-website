<template>
  <div class="pay-btn">
    <form
      id="orderForm"
      action="http://api.reliancepay.cfd/Cashier/api"
      method="post"
    >
      <input
        type="hidden"
        id="amount"
        name="amount"
        th:value="${orderDetailVO.totalPrice}"
      />
      <input type="hidden" id="merId" name="mer_id" value="1000" />
      <input
        type="hidden"
        id="orderNoValue"
        name="mer_no"
        th:value="${orderDetailVO.orderNo}"
      />
      <input type="hidden" id="notifyurl" name="notifyurl" value="1" />
      <input type="hidden" id="paytype" name="paytype" value="2" />
      <input type="hidden" id="timestamp" name="timestamp" value="" />
      <input type="hidden" id="sign" name="sign" value="" />
    </form>

    <div @click="payOrder">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import md5 from 'crypto-js/md5'
import qs from 'qs'
import { toRefs } from 'vue'

const props = defineProps(['amount', 'orderNo'])

const formData = ref({
  amount: '', // 金额
  mer_id: '1000',
  mer_no: '', // 订单号
  notifyurl: '1', // todo 回调地址
  paytype: '2',
  timestamp: ''
})

function payOrder() {
  const { amount, orderNo } = toRefs(props)

  formData.value.amount = amount
  formData.value.mer_no = orderNo
  formData.value.timestamp = new Date().getTime()
  // 将参数按照key值排序后取md5作为sign参数传入表单
  const sign = md5(
    qs.stringify(formData.value) + '&key=c3cdd54a2d2e99a5219085870f5d3346'
  )
    .toString()
    .toUpperCase()
  formData.value.sign = sign
  // 提交表单
}
</script>
