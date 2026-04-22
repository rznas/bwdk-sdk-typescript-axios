# OrderDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**created_at** | **string** |  | [readonly] [default to undefined]
**order_uuid** | **string** |  | [readonly] [default to undefined]
**reservation_expired_at** | **number** | Unix timestamp تا زمانی که سفارش برای پرداخت رزرو شده است | [readonly] [default to undefined]
**merchant_order_id** | **string** | شناسه منحصر به فرد سفارش در سیستم فروشنده | [readonly] [default to undefined]
**status** | [**OrderStatusEnum**](OrderStatusEnum.md) |  | [readonly] [default to undefined]
**status_display** | **string** |  | [readonly] [default to undefined]
**main_amount** | **number** | مجموع قیمت اولیه تمام کالاهای سفارش بدون تخفیف (به تومان) | [readonly] [default to undefined]
**final_amount** | **number** | قیمت نهایی قابل پرداخت توسط مشتری: مبلغ_اصلی - مبلغ_تخفیف + مبلغ_مالیات (به تومان) | [readonly] [default to undefined]
**total_paid_amount** | **number** | مبلغ کل پرداخت شده توسط کاربر: مبلغ_نهایی + هزینه_ارسال (به تومان) | [readonly] [default to undefined]
**discount_amount** | **number** | مبلغ کل تخفیف اعمال شده بر سفارش (به تومان) | [readonly] [default to undefined]
**tax_amount** | **number** | مبلغ کل مالیات برای سفارش (به تومان) | [readonly] [default to undefined]
**shipping_amount** | **number** | هزینه ارسال برای سفارش (به تومان) | [readonly] [default to undefined]
**loyalty_amount** | **number** | مقدار تخفیف از برنامه باشگاه مشتریان/پاداش (به تومان) | [readonly] [default to undefined]
**callback_url** | **string** | آدرسی برای دریافت اطلاع رسانی وضعیت پرداخت پس از تکمیل سفارش | [readonly] [default to undefined]
**merchant** | [**Merchant**](Merchant.md) |  | [default to undefined]
**items** | [**Array&lt;OrderItemCreate&gt;**](OrderItemCreate.md) |  | [default to undefined]
**source_address** | **any** |  | [readonly] [default to undefined]
**destination_address** | **any** |  | [readonly] [default to undefined]
**selected_shipping_method** | [**ShippingMethod**](ShippingMethod.md) |  | [readonly] [default to undefined]
**shipping_selected_at** | **string** |  | [readonly] [default to undefined]
**address_selected_at** | **string** |  | [readonly] [default to undefined]
**packing_amount** | **number** | هزینه روش بسته‌بندی انتخاب‌شده (به تومان) | [readonly] [default to undefined]
**packing_selected_at** | **string** |  | [readonly] [default to undefined]
**selected_packing** | [**Packing**](Packing.md) |  | [readonly] [default to undefined]
**can_select_packing** | **boolean** |  | [readonly] [default to undefined]
**can_select_shipping** | **boolean** |  | [readonly] [default to undefined]
**can_select_address** | **boolean** |  | [readonly] [default to undefined]
**can_proceed_to_payment** | **boolean** |  | [readonly] [default to undefined]
**is_paid** | **boolean** |  | [readonly] [default to undefined]
**user** | [**OrderUser**](OrderUser.md) |  | [readonly] [default to undefined]
**payment** | [**PaymentOrder**](PaymentOrder.md) |  | [readonly] [default to undefined]
**preparation_time** | **number** | Preparation time for the order (in days) | [readonly] [default to undefined]
**weight** | **number** | Total weight of the order (in grams) | [readonly] [default to undefined]
**selected_shipping_data** | **{ [key: string]: any; }** |  | [readonly] [default to undefined]
**reference_code** | **string** | کد مرجع یکتا برای پیگیری سفارش مشتری (قالب: BD-XXXXXXXX) | [readonly] [default to undefined]
**promotion_discount_amount** | **number** |  | [readonly] [default to undefined]
**promotion_data** | **{ [key: string]: any; }** |  | [readonly] [default to undefined]
**digipay_markup_amount** | **number** | Markup amount for the order (in Tomans) | [readonly] [default to undefined]
**markup_commission_percentage** | **number** | Markup commission percentage for the order (in percent) | [readonly] [default to undefined]
**previous_status** | [**OrderStatusEnum**](OrderStatusEnum.md) |  | [readonly] [default to undefined]
**previous_status_display** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { OrderDetail } from './api';

const instance: OrderDetail = {
    id,
    created_at,
    order_uuid,
    reservation_expired_at,
    merchant_order_id,
    status,
    status_display,
    main_amount,
    final_amount,
    total_paid_amount,
    discount_amount,
    tax_amount,
    shipping_amount,
    loyalty_amount,
    callback_url,
    merchant,
    items,
    source_address,
    destination_address,
    selected_shipping_method,
    shipping_selected_at,
    address_selected_at,
    packing_amount,
    packing_selected_at,
    selected_packing,
    can_select_packing,
    can_select_shipping,
    can_select_address,
    can_proceed_to_payment,
    is_paid,
    user,
    payment,
    preparation_time,
    weight,
    selected_shipping_data,
    reference_code,
    promotion_discount_amount,
    promotion_data,
    digipay_markup_amount,
    markup_commission_percentage,
    previous_status,
    previous_status_display,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
