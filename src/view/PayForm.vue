<template>
  <div class="pay-btn">
    <form
      ref="formRef"
      id="orderForm"
      action="http://api.reliancepay.cfd/Cashier/api"
      method="post"
    >
      <input type="hidden" id="amount" name="amount" :value="formData.amount" />
      <input type="hidden" id="merId" name="mer_id" value="1000" />
      <input
        type="hidden"
        id="orderNoValue"
        name="mer_no"
        :value="formData.mer_no"
      />
      <input
        type="hidden"
        id="notifyurl"
        name="notifyurl"
        :value="formData.notifyurl"
      />
      <input
        type="hidden"
        id="paytype"
        name="paytype"
        :value="formData.paytype"
      />
      <input
        type="hidden"
        id="timestamp"
        name="timestamp"
        :value="formData.timestamp"
      />
      <input type="hidden" id="sign" name="sign" :value="formData.sign" />
    </form>

    <div @click="payOrder">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import md5 from 'crypto-js/md5'
import qs from 'qs'
import { nextTick, ref, toRefs } from 'vue'

const props = defineProps(['amount', 'orderNo'])

const formRef = ref()
const formData = ref({
  amount: '', // 金额
  mer_id: '1000',
  mer_no: '', // 订单号
  notifyurl: '1', // todo 回调地址
  paytype: '2',
  timestamp: ''
})

function payOrder() {
  const { amount } = toRefs(props)

  formData.value.amount = amount.value
  formData.value.mer_no = md5(new Date().getTime()).toString()
  formData.value.timestamp = new Date().getTime()
  // 将参数按照key值排序后取md5作为sign参数传入表单
  const sign = md5(
    qs.stringify(formData.value) + '&key=c3cdd54a2d2e99a5219085870f5d3346'
  )
    .toString()
    .toUpperCase()
  formData.value.sign = sign
  // 提交表单
  nextTick(()=> {
    formRef.value.submit()
  })
}
</script>
