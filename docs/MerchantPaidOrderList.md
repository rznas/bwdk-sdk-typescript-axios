# MerchantPaidOrderList

Serializer for manager view listing PAID_BY_USER orders

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_uuid** | **string** |  | [readonly] [default to undefined]
**merchant_order_id** | **string** | شناسه منحصر به فرد سفارش در سیستم فروشنده | [readonly] [default to undefined]
**merchant_unique_id** | **string** | شناسه منحصر به فرد برای پذیرنده برای تأیید سفارش | [readonly] [default to undefined]
**paid_at** | **string** |  | [readonly] [default to undefined]
**refunds_at** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { MerchantPaidOrderList } from './api';

const instance: MerchantPaidOrderList = {
    order_uuid,
    merchant_order_id,
    merchant_unique_id,
    paid_at,
    refunds_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
