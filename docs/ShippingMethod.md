# ShippingMethod

Serializer for shipping method details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**name** | **string** | نام روش ارسال | [default to undefined]
**description** | **string** | توضیحات روش ارسال و جزئیات تحویل آن | [optional] [default to undefined]
**shipping_type** | [**ShippingTypeEnum**](ShippingTypeEnum.md) | نوع روش ارسال: عادی یا دیجی اکسپرس  * &#x60;1&#x60; - سایر * &#x60;2&#x60; - دیجی اکسپرس | [optional] [default to undefined]
**get_shipping_type_display** | **string** |  | [readonly] [default to undefined]
**shipping_type_display** | **string** |  | [readonly] [default to undefined]
**cost** | **number** | هزینه ارسال برای منطقه اولیه (مثلاً تهران) به تومان | [optional] [default to undefined]
**secondary_cost** | **number** | هزینه ارسال برای مناطق دیگر به تومان | [optional] [default to undefined]
**minimum_time_sending** | **number** | حداقل تعداد روزها از تاریخ سفارش تا تحویل | [optional] [default to undefined]
**maximum_time_sending** | **number** | حداکثر تعداد روزها از تاریخ سفارش تا تحویل | [optional] [default to undefined]
**delivery_time_display** | **string** |  | [readonly] [default to undefined]
**delivery_time_range_display** | [**DeliveryTimeRangeDisplay**](DeliveryTimeRangeDisplay.md) |  | [readonly] [default to undefined]
**inventory_address** | [**BusinessAddress**](BusinessAddress.md) |  | [readonly] [default to undefined]
**is_pay_at_destination** | **boolean** | Whether the shipping method is pay at destination | [optional] [default to undefined]

## Example

```typescript
import { ShippingMethod } from './api';

const instance: ShippingMethod = {
    id,
    name,
    description,
    shipping_type,
    get_shipping_type_display,
    shipping_type_display,
    cost,
    secondary_cost,
    minimum_time_sending,
    maximum_time_sending,
    delivery_time_display,
    delivery_time_range_display,
    inventory_address,
    is_pay_at_destination,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
