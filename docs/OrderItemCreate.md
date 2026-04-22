# OrderItemCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | نام کامل محصول شامل تمام مشخصات | [default to undefined]
**primary_amount** | **number** | قیمت اولیه برای هر واحد بدون تخفیف (به تومان) | [optional] [default to undefined]
**amount** | **number** | قیمت نهایی برای تمام واحدها بعد از تخفیف (به تومان) | [optional] [default to undefined]
**count** | **number** | تعداد واحدهای این کالا در سفارش | [default to undefined]
**discount_amount** | **number** | مبلغ کل تخفیف برای این کالا (به تومان) | [optional] [default to undefined]
**tax_amount** | **number** | مبلغ کل مالیات برای این کالا (به تومان) | [optional] [default to undefined]
**image_link** | **string** | آدرس تصویر محصول | [optional] [default to undefined]
**_options** | [**Array&lt;Option&gt;**](Option.md) |  | [default to undefined]
**preparation_time** | **number** | زمان آمادهسازی کالا (به روز) | [optional] [default to 2]
**weight** | **number** | وزن کالا (بر حسب گرم) | [optional] [default to undefined]

## Example

```typescript
import { OrderItemCreate } from './api';

const instance: OrderItemCreate = {
    name,
    primary_amount,
    amount,
    count,
    discount_amount,
    tax_amount,
    image_link,
    _options,
    preparation_time,
    weight,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
