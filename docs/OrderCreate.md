# OrderCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_order_id** | **string** | شناسه منحصر به فرد این سفارش در سیستم فروشنده | [default to undefined]
**merchant_unique_id** | **string** | شناسه منحصر به فرد برای تأیید اصالت سفارش | [default to undefined]
**main_amount** | **number** | مجموع قیمت‌های اولیه تمام کالاها بدون تخفیف (به تومان) | [optional] [default to undefined]
**final_amount** | **number** | مبلغ نهایی: مبلغ_اصلی - مبلغ_تخفیف + مبلغ_مالیات (به تومان) | [optional] [default to undefined]
**total_paid_amount** | **number** | مبلغ کل پرداخت شده توسط کاربر: مبلغ_نهایی + هزینه_ارسال (به تومان) | [optional] [default to undefined]
**discount_amount** | **number** | مبلغ کل تخفیف برای تمام سفارش (به تومان) | [optional] [default to undefined]
**tax_amount** | **number** | مبلغ کل مالیات برای تمام سفارش (به تومان) | [optional] [default to undefined]
**shipping_amount** | **number** | هزینه ارسال برای سفارش (به تومان) | [optional] [default to undefined]
**loyalty_amount** | **number** | مبلغ تخفیف باشگاه مشتریان/پاداش (به تومان) | [optional] [default to undefined]
**callback_url** | **string** | آدرس وب‌هوک برای دریافت اطلاع رسانی وضعیت پرداخت | [default to undefined]
**destination_address** | **any** |  | [readonly] [default to undefined]
**items** | [**Array&lt;OrderItemCreate&gt;**](OrderItemCreate.md) |  | [default to undefined]
**merchant** | **number** | مقدار توسط سیستم جایگذاری می شود | [optional] [default to undefined]
**source_address** | **any** | مقدار توسط سیستم جایگذاری می شود | [optional] [default to undefined]
**user** | **number** |  | [readonly] [default to undefined]
**reservation_expired_at** | **number** | مهلت پرداخت (به عنوان Unix timestamp) قبل از اتمام سفارش | [optional] [default to undefined]
**reference_code** | **string** | کد مرجع منحصر به فرد برای پیگیری سفارش مشتری (فرمت: BD-XXXXXXXX) | [readonly] [default to undefined]
**preparation_time** | **number** | زمان آمادهسازی سفارش (به روز) | [optional] [default to 2]
**weight** | **number** | وزن کل سفارش (بر حسب گرم) | [optional] [default to undefined]

## Example

```typescript
import { OrderCreate } from './api';

const instance: OrderCreate = {
    merchant_order_id,
    merchant_unique_id,
    main_amount,
    final_amount,
    total_paid_amount,
    discount_amount,
    tax_amount,
    shipping_amount,
    loyalty_amount,
    callback_url,
    destination_address,
    items,
    merchant,
    source_address,
    user,
    reservation_expired_at,
    reference_code,
    preparation_time,
    weight,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
